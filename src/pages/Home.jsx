import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full bg-confetti bg-cover bg-fixed bg-center pt-8 pb-24 lg:pt-12 lg:pb-28">
        <HowItWorks />
        <CTA />
      </div>
    </div>
  );
}

export default Home;
