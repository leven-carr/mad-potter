import {
  CustomQuestionBadge,
  CustomOpenDoor,
  CustomHourglass,
  CustomPiggyBank,
  CustomLightBulb,
} from "./icons";
import NavLinkItem from "./NavLinkItem";

function HowItWorks() {
  return (
    <section className="w-full bg-confetti bg-cover bg-fixed bg-center">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10 pb-26 md:py-24 md:pb-40">
        {/* Title Card */}
        <div className="flex w-full max-w-xl flex-col justify-center gap-3 rounded-2xl bg-canvas/80 p-6 backdrop-blur-xs">
          <h2 className="text-center font-display text-3xl">How It Works</h2>
          <CustomQuestionBadge className="self-center" />
          <p className="text-center text-xl font-medium">
            Choose your piece, take a seat, and start painting!
          </p>
        </div>

        {/* Card #1 */}
        <article className="flex max-w-xl flex-col justify-center gap-3 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-xs">
          <h3 className="text-center text-xl font-medium">
            "Do I need to make a reservation?"
          </h3>
          <CustomOpenDoor className="self-center" />
          <p className="text-md font-medium">
            We are a walk-in studio, so no reservations are necessary. As long
            as we are open and have tables available, you are always welcome!
          </p>
          <p className="text-md font-medium">
            For groups of 8 people or more, we do ask that you call ahead to
            ensure that we have enough tables available. If you are planning a
            group event in advance, please take a look at our{" "}
            <NavLinkItem
              link={{ to: "/parties-and-keepsakes", label: "Parties" }}
              className="interactive text-brand-primary"
            />{" "}
            page for more information!
          </p>
        </article>

        {/* Card #2 */}
        <article className="flex max-w-xl flex-col justify-center gap-3 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-xs">
          <h3 className="text-center text-xl font-medium">
            "When can I take my piece home?"
          </h3>
          <CustomHourglass className="self-center" />
          <p className="text-md font-medium">
            Unfortunately, your piece has to stay with us for a week. The kiln
            takes time to work its magic. Please note that due to the volume of
            pieces that we have, we rely on you to remember that your piece is
            in the studio; we do not call to let you know that it is ready for
            pick-up.
          </p>
        </article>

        {/* Card #3 */}
        <article className="flex max-w-xl flex-col justify-center gap-3 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-xs">
          <h3 className="text-center text-xl font-medium">
            "How much can I expect to spend when I visit the studio?"
          </h3>
          <CustomPiggyBank className="self-center" />
          <p className="text-md font-medium">
            Payment consists of the price of your piece + an $8 studio fee that
            covers painting, glazing, and kiln-firing for up to 2 pieces per
            person. For kids aged 12 and under, the studio fee is reduced to $6.
            We have a variety of pieces for you to choose from, ranging in price
            from about $5 to $40.
          </p>
          <p className="text-md font-medium">
            Please visit our{" "}
            <NavLinkItem
              link={{
                to: "/",
                label: "Calendar",
                isExternal: true,
              }}
              className="interactive text-brand-primary"
            />{" "}
            to see when we may be running promotions!
          </p>
        </article>

        {/* Card #4 */}
        <article className="flex max-w-xl flex-col justify-center gap-3 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-xs">
          <h3 className="text-center text-xl font-medium">
            "What if I'm not creative?"
          </h3>
          <CustomLightBulb className="self-center" />
          <p className="text-md font-medium">
            No worries! Everyone is creative, and the staff here will help guide
            you the best we can!
          </p>
        </article>
      </div>
    </section>
  );
}

export default HowItWorks;
