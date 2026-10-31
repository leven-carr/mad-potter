import SectionHeading from "./SectionHeading";
import Subheading from "./Subheading";
import FAQCard from "./FAQCard";
import { FAQ_DATA } from "../constants/faqs";
import HorizontalRule from "./HorizontalRule";

function HowItWorks() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 lg:px-10 lg:py-12">
        {/* Title Card */}
        <div className="flex w-full max-w-xl flex-col items-center gap-4 py-6 xs:p-6">
          <SectionHeading>How It Works</SectionHeading>
          <HorizontalRule className="max-w-xs self-center fill-brand-primary/70" />
          <Subheading>
            Choose your piece, take a seat, and start painting!
          </Subheading>
        </div>

        {/* FAQ Cards */}
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row lg:items-start lg:px-6">
          {FAQ_DATA.map((faq) => {
            return <FAQCard key={faq.id} data={faq} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
