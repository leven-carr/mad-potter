import PageWrapper from "../components/PageWrapper";
import Hero from "../components/Hero";
import Welcome from "../components/Welcome";
import HowItWorks from "../components/HowItWorks";
import CTA from "../components/CTA";

function Home() {
  return (
    <div>
      <Hero />
      <PageWrapper className="bg-swirls bg-cover bg-fixed">
        <Welcome />
        <HowItWorks />
        <CTA />
      </PageWrapper>
    </div>
  );
}

export default Home;
