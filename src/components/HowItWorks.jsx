import { CustomQuestionBadge } from "./icons";
import FAQCard from "./FAQCard";
import { FAQ_DATA } from "../constants/faqs";

function HowItWorks() {
  return (
    <section className="w-full bg-confetti bg-cover bg-fixed bg-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 pb-26 lg:px-10 lg:py-20 lg:pb-36">
        {/* Title Card */}
        <article className="flex w-full max-w-2xl flex-col justify-center gap-3 rounded-2xl bg-canvas/80 p-6 backdrop-blur-xs">
          <h2 className="text-center font-display text-3xl md:text-4xl">
            How It Works
          </h2>
          <CustomQuestionBadge className="size-16 self-center" />
          <p className="text-center text-xl font-medium md:text-2xl">
            Choose your piece, take a seat, and start painting!
          </p>
        </article>

        <div className="flex w-full flex-col items-center justify-center gap-6">
          {FAQ_DATA.map((faq) => {
            return <FAQCard key={faq.id} data={faq} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
