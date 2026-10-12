import { useState, useRef, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { useCarouselTween } from "../hooks/useCarouselTween";

import { IoChevronBackCircle, IoChevronForwardCircle } from "react-icons/io5";

import studioGirlPainting from "../assets/images/studio-girl-painting.jpg";
import studioPitcher from "../assets/images/studio-pitcher.jpg";
import studioColorful from "../assets/images/studio-colorful.jpg";
import studioMug from "../assets/images/studio-mug.jpg";
import studioKidsPainting from "../assets/images/studio-kids-painting.jpg";

function BlobCarousel() {
  const slides = [
    {
      id: "1",
      src: studioColorful,
      alt: "Close-up of colorful pottery and papers with handprints",
      path: "M1912 1209c27-319-72-699-318-882-187-139-462-224-785-204S85 468 84 880c0 455 481 345 636 484s139 514 477 516c386 3 693-420 715-671Z",
    },
    {
      id: "2",
      src: studioKidsPainting,
      alt: "Three kids painting ceramic figures",
      path: "M1731 616c-471.92-255.03-702.26-729.2-1003-394-311.73 347.45-801.43 446.16-598 857 222.34 449.04 63.69 865.99 531 809 517.42-63.1 1054.46 163.31 1095-261 42.27-442.37 351.61-807.48-25-1011Z",
    },
    {
      id: "3",
      src: studioPitcher,
      alt: "Unpainted ceramic pitcher and paintbrushes on a table",
      path: "M70.93 687.44C94 439 234.2 293.95 381.02 188.24 527.84 82.53 887.27-.87 1159.77 82.53c272.5 83.4 553.55 115.11 673.78 302.45 120.23 187.35 114.36 417.56 87.35 671.27-27.02 253.71-150.35 364.12-335.93 543.83-185.58 179.71-590.81 176.19-973.73 106.89C228.33 1637.67 257 1468 149.63 1259.45c-91.86-178.42-96.18-383.72-78.7-572.02Z",
    },
    {
      id: "4",
      src: studioGirlPainting,
      alt: "Girl painting a ceramic figure",
      path: "M1790.25 758.43c-83.89-127.72-435-323-545-495-205.29-321.01-400-267-601.54 15.65-196.77 275.94-243.45 319.35-380.45 460.35-155.75 160.29-199.8 254.36-84.44 481.41 84.04 165.4 355.27 293.71 513.44 435.59 212.03 190.19 409.1 435.88 557.69 207.29 258.06-397 415.11-409.44 525.31-572.29 118.15-174.6 168.97-298.59 15-533Z",
    },
    {
      id: "5",
      src: studioMug,
      alt: "Colorful hand-painted mug on table with art supplies",
      path: "M1386.57 181.4c160.9 73.74 328.5 149.72 424.59 281.57 96.09 129.61 118.44 315.09 98.33 487.16-20.11 172.07-84.92 332.97-187.71 446.94-105.03 116.2-250.29 185.48-391.07 243.58-138.55 60.34-272.63 109.5-393.31 91.62-122.91-17.88-234.64-102.8-377.66-160.9-143.02-58.1-317.33-87.15-406.71-183.24-89.39-96.09-96.09-261.46 2.23-368.72 98.33-109.5 301.68-160.9 384.37-270.4 82.68-111.73 42.46-283.81 84.92-422.36C669.24 188.1 798.86 80.83 937.41 60.72c140.79-20.11 290.51 49.16 449.17 120.67Z",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const containerRef = useRef(null);

  useCarouselTween(emblaApi, containerRef, setSelectedIndex, setScrollSnaps);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div
      ref={containerRef}
      className="embla-wrapper relative mx-auto flex h-[clamp(300px,95vw,464px)] w-full max-w-7xl flex-col justify-between py-4"
    >
      {/* Embla Viewport */}
      <div className="embla__viewport flex-1" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide) => (
            <div className="embla__slide" key={slide.id}>
              <div className="embla__slide__inner">
                <svg
                  viewBox="0 0 2000 2000"
                  className="h-full w-full drop-shadow-md"
                >
                  <defs>
                    <clipPath id={slide.id}>
                      <path d={slide.path}></path>
                    </clipPath>
                  </defs>
                  <image
                    href={slide.src}
                    width="2000"
                    height="2000"
                    clipPath={`url(#${slide.id})`}
                    preserveAspectRatio="xMidYMid slice"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex items-center justify-center gap-4">
        {/* Previous Button */}
        <button
          onClick={scrollPrev}
          className="flex cursor-pointer items-center justify-center rounded-full text-brand-primary/70 transition-[color] duration-300 hover:text-brand-primary focus-visible:outline-3 focus-visible:outline-brand-primary/70"
          aria-label="Previous slide"
        >
          <IoChevronBackCircle aria-hidden="true" className="size-12" />
        </button>

        {/* Dot Indicators Group */}
        <div
          className="flex items-center justify-center gap-3"
          role="group"
          aria-label="Carousel slides"
        >
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi && emblaApi.scrollTo(index)}
              className={`size-3 cursor-pointer rounded-full border-none transition-[color] duration-300 focus-visible:outline-3 focus-visible:outline-brand-primary/70 ${
                index === selectedIndex
                  ? "bg-brand-primary/70"
                  : "bg-brand-secondary"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === selectedIndex ? "true" : "false"}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={scrollNext}
          className="flex cursor-pointer items-center justify-center rounded-full text-brand-primary/70 transition-[color] duration-300 hover:text-brand-primary focus-visible:outline-3 focus-visible:outline-brand-primary/70"
          aria-label="Next slide"
        >
          <IoChevronForwardCircle aria-hidden="true" className="size-12" />
        </button>
      </div>
    </div>
  );
}

export default BlobCarousel;
