import { CustomQuestionBadge } from "./icons";
import FAQCard from "./FAQCard";
import { FAQ_DATA } from "../constants/faqs";
import paintsImg from "../assets/images/paints.jpg";

function HowItWorks() {
  return (
    <section className="w-full">
      <div className="how-it-works-grid mx-auto max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        {/* Title Card */}
        <article className="hiw-title flex w-full max-w-xl flex-col justify-center gap-6 rounded-2xl bg-canvas/70 p-6 backdrop-blur-xs">
          <h2 className="text-center font-display text-3xl lg:text-4xl">
            How It Works
          </h2>
          <CustomQuestionBadge className="size-16 self-center" />
          <span className="text-center text-2xl font-medium">
            Choose your piece, take a seat, and start painting!
          </span>
        </article>

        <div className="hiw-faqs flex w-full flex-col items-center justify-center gap-6">
          {FAQ_DATA.map((faq) => {
            return <FAQCard key={faq.id} data={faq} />;
          })}
        </div>

        <img
          src={paintsImg}
          alt=""
          className="hiw-img w-full max-w-md rounded-2xl md:max-w-xl"
        />
      </div>
    </section>
  );
}

export default HowItWorks;
