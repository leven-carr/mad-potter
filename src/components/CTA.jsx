import CTAButton from "./CTAButton";
import paintsImg from "../assets/images/paints.jpg";

function CTA() {
  return (
    <section className="w-full">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-around gap-12 px-6 py-8 lg:flex-row-reverse lg:gap-6 lg:px-10 lg:py-12">
        {/* Text + Button */}
        <div className="flex w-full flex-col items-center lg:w-1/2">
          <div className="flex flex-col items-center gap-2 rounded-2xl bg-canvas/40 py-6 text-center backdrop-blur-sm xs:p-6">
            <span className="text-2xl font-medium">Ready to get creative?</span>
            <h2 className="font-display text-[32px] lg:text-4xl">
              We'd love to paint with you!
            </h2>
          </div>

          <div className="flex items-center justify-center py-6">
            <CTAButton />
          </div>
        </div>

        {/* Image */}
        <img
          src={paintsImg}
          alt=""
          className="w-full max-w-md rounded-2xl lg:w-1/2 lg:max-w-xl"
        />
      </div>
    </section>
  );
}

export default CTA;
