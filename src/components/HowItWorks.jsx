import { CustomQuestionBadge } from "./icons";
import FAQCard from "./FAQCard";
import { FAQ_DATA } from "../constants/faqs";
import paintsImg from "../assets/images/paints.jpg";

function HowItWorks() {
  return (
    <section className="w-full bg-confetti bg-cover bg-fixed bg-center">
      <div className="how-it-works-grid mx-auto max-w-7xl px-6 py-10 pb-26 lg:px-10 lg:py-24 lg:pb-40">
        {/* Title Card */}
        <article className="hiw-title flex w-full max-w-xl flex-col justify-center gap-6 rounded-2xl bg-canvas/80 backdrop-blur-xs lg:p-6">
          <h2 className="text-center font-display text-3xl lg:text-4xl">
            How It Works
          </h2>
          <CustomQuestionBadge className="size-16 self-center" />
          <p className="text-center text-xl font-medium lg:text-2xl">
            Choose your piece, take a seat, and start painting!
          </p>
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
