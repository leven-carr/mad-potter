import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

function Home() {
  return (
    <div>
      <Hero />
      <div className="w-full bg-swirls bg-cover bg-fixed bg-left pt-4 pb-28 lg:pt-8 lg:pb-32">
        <HowItWorks />
        <CTA />
      </div>
    </div>
  );
}

export default Home;
