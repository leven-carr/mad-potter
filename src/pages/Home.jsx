import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full bg-confetti bg-cover bg-fixed bg-center">
        <HowItWorks />
        <CTA />
      </div>
    </div>
  );
}

export default Home;
