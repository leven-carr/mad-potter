import logoVertStack from "../assets/images/logo-vert-stack.svg";
import logoHoriStack from "../assets/images/logo-hori-stack.svg";

function Hero() {
  return (
    <section className="w-full bg-hero bg-cover bg-center">
      <div className="mx-auto flex min-h-[calc(100vh-3.75rem)] max-w-7xl flex-col items-center justify-center gap-10 px-6 py-10 md:min-h-[calc(100vh-4.75rem)] md:gap-12 md:py-24 lg:min-h-[calc(100vh-5.25rem)]">
        <img
          src={logoVertStack}
          alt="Mad Potter Mason: Paint-Your-Own Pottery Studio"
          className="w-full max-w-xs md:hidden"
        />
        <img
          src={logoHoriStack}
          alt="Mad Potter Mason: Paint-Your-Own Pottery Studio"
          className="hidden w-full max-w-2xl md:block"
        />
      </div>
    </section>
  );
}

export default Hero;
