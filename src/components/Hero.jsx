import logoVertStack from "../assets/images/logo-vert-stack.svg";
import logoHoriStack from "../assets/images/logo-hori-stack.svg";

function Hero() {
  return (
    <section className="w-full bg-hero-mobile bg-cover bg-center text-ink-base md:bg-hero-desktop">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 pt-10 pb-26 md:gap-16 md:pt-24 md:pb-40">
        <img
          src={logoVertStack}
          alt=""
          className="w-[80%] max-w-3xs md:hidden"
        />
        <img
          src={logoHoriStack}
          alt=""
          className="hidden w-[65%] max-w-2xl md:block"
        />
        <p className="max-w-sm rounded-2xl bg-brand-secondary/60 p-6 text-center text-lg tracking-wider backdrop-blur-xs md:max-w-xl">
          Welcome to Mad Potter, where creativity comes to life! We provide a
          fun and colorful atmosphere where you can paint a one-of-a-kind piece
          for your own home, or to give as a heartfelt gift.
        </p>
      </div>
    </section>
  );
}

export default Hero;
