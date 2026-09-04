import logoVertStack from "../assets/images/logo-vert-stack.svg";
import logoHoriStack from "../assets/images/logo-hori-stack.svg";

function Hero() {
  return (
    <section className="w-full bg-hero bg-cover bg-center">
      <div className="mx-auto flex min-h-[calc(100vh-3.75rem)] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-10 md:min-h-[calc(100vh-4.75rem)] md:gap-12 md:py-24 lg:min-h-[calc(100vh-5.25rem)]">
        <img
          src={logoVertStack}
          alt=""
          className="w-full max-w-2xs md:hidden"
        />
        <img
          src={logoHoriStack}
          alt=""
          className="hidden w-full max-w-xl md:block"
        />
        <p className="max-w-lg rounded-2xl bg-brand-secondary/60 p-6 text-center text-lg tracking-wider backdrop-blur-xs">
          Welcome to Mad Potter, where creativity comes to life! Step into a
          colorful, hands-on studio home to fun, memories, and masterpieces. No
          experience needed, just bring your imagination and we'll handle the
          rest!
        </p>
      </div>
    </section>
  );
}

export default Hero;
