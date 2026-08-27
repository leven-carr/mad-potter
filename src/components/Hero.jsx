import logoStack from "../assets/images/logo-stack.svg";

function Hero() {
  return (
    <section className="w-full bg-hero-mobile bg-cover bg-center text-ink-base">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 px-6 pt-10 pb-26">
        <img src={logoStack} alt="" className="w-[80%] max-w-64" />
        <p className="max-w-96 rounded-2xl bg-brand-secondary/60 p-6 text-center text-lg tracking-wider backdrop-blur-xs">
          Welcome to Mad Potter, where creativity comes to life! We provide a
          fun and colorful atmosphere where you can paint a one-of-a-kind piece
          for your own home, or to give as a heartfelt gift.
        </p>
      </div>
    </section>
  );
}

export default Hero;
