import logoVertStack from "../assets/images/logo-vert-stack.svg";
import logoHoriStack from "../assets/images/logo-hori-stack.svg";

function Hero() {
  return (
    <section className="w-full bg-hero-mobile bg-cover bg-center md:bg-hero-desktop">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-10 md:gap-12 md:py-24 lg:min-h-[calc(100vh-5.5rem)]">
        <img
          src={logoVertStack}
          alt=""
          className="w-full max-w-3xs md:hidden"
        />
        <img
          src={logoHoriStack}
          alt=""
          className="hidden w-full max-w-xl md:block"
        />
        <p className="max-w-lg rounded-2xl bg-brand-secondary/60 p-6 text-center text-lg tracking-wider backdrop-blur-xs">
          Welcome to Mad Potter, where creativity comes to life! We provide a
          fun and colorful atmosphere where you can paint a one-of-a-kind piece
          for your own home, or to give as a heartfelt gift.
        </p>
      </div>
    </section>
  );
}

export default Hero;
