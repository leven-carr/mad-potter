import PageWrapper from "../components/ui/PageWrapper";
import Hero from "../components/features/home/Hero";
import Welcome from "../components/features/home/Welcome";
import HowItWorks from "../components/features/home/HowItWorks";
import CTA from "../components/common/CTA";
import CouponModal from "@/components/common/CouponModal";

function Home() {
  return (
    <div>
      <Hero />
      <PageWrapper className="bg-swirls bg-cover bg-fixed">
        <Welcome />
        <HowItWorks />
        <CTA />
        <CouponModal />
      </PageWrapper>
    </div>
  );
}

export default Home;
