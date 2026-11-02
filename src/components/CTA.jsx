import LayoutWrapper from "./LayoutWrapper";
import SectionHeading from "./SectionHeading";
import Subheading from "./Subheading";
import CTAButton from "./CTAButton";
import paintsImg from "../assets/images/paints.jpg";

function CTA() {
  return (
    <section className="w-full">
      <LayoutWrapper className="lg:flex-row-reverse lg:justify-between">
        {/* Text + Button */}
        <div className="flex w-full max-w-2xl flex-col items-center gap-4 py-6 xs:px-6">
          <Subheading>Ready to get creative?</Subheading>
          <SectionHeading>We'd love to paint with you!</SectionHeading>
          <div className="flex items-center justify-center py-4">
            <CTAButton />
          </div>
        </div>

        {/* Image */}
        <img src={paintsImg} alt="" className="w-full max-w-lg rounded-2xl" />
      </LayoutWrapper>
    </section>
  );
}

export default CTA;
