import { useEffect, useCallback, useRef } from "react";

const TWEEN_FACTOR_BASE = 0.52;
const clamp = (number, min, max) => Math.min(Math.max(number, min), max);

export function useCarouselTween(
  emblaApi,
  containerRef,
  setSelectedIndex,
  setScrollSnaps,
) {
  const tweenFactor = useRef(0);
  const tweenNodes = useRef([]);

  const setTweenNodes = useCallback((emblaApi) => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector(".embla__slide__inner");
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
  }, []);

  const tweenScale = useCallback((emblaApi, event) => {
    const engine = emblaApi.internalEngine();
    const scrollProgress = emblaApi.scrollProgress();
    const slidesInView = emblaApi.slidesInView();
    const isScrollEvent = event?.type === "scroll";

    emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
      let diffToTarget = scrollSnap - scrollProgress;
      const slidesInSnap = engine.slideRegistry[snapIndex];
      if (!slidesInSnap) return;

      slidesInSnap.forEach((slideIndex) => {
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

        if (engine.options.loop) {
          engine.slideLooper.loopPoints.forEach((loopItem) => {
            const target = loopItem.target();
            if (slideIndex === loopItem.index && target !== 0) {
              const sign = Math.sign(target);
              if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
              if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
            }
          });
        }

        const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
        const scale = clamp(tweenValue, 0.8, 1).toString();
        const tweenNode = tweenNodes.current[slideIndex];
        if (tweenNode) tweenNode.style.transform = `scale(${scale})`;
      });
    });
  }, []);

  const onSelect = useCallback(
    (emblaApi) => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    },
    [setSelectedIndex],
  );

  const updateLoopAttribute = useCallback(
    (emblaApi) => {
      if (!containerRef.current) return;
      const canScroll = emblaApi.canScrollNext();
      containerRef.current.setAttribute(
        "data-loop-active",
        canScroll.toString(),
      );
    },
    [containerRef],
  );

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);
    onSelect(emblaApi);
    updateLoopAttribute(emblaApi);

    emblaApi
      .on("reInit", setTweenNodes)
      .on("reInit", setTweenFactor)
      .on("reInit", tweenScale)
      .on("reInit", onSelect)
      .on("reInit", updateLoopAttribute)
      .on("scroll", tweenScale)
      .on("slideFocus", tweenScale)
      .on("select", onSelect);

    return () => {
      emblaApi.off("scroll", tweenScale);
      emblaApi.off("slideFocus", tweenScale);
      emblaApi.off("select", onSelect);
    };
  }, [
    emblaApi,
    setTweenNodes,
    setTweenFactor,
    tweenScale,
    onSelect,
    updateLoopAttribute,
    setScrollSnaps,
  ]);
}
