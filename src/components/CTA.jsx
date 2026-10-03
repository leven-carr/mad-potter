import CTAButton from "./CTAButton";

function CTA() {
  return (
    <section className="w-full">
      <div className="mx-auto cta-grid max-w-7xl px-6 py-8 lg:px-10 lg:py-12">
        <div className="cta-title flex w-full max-w-xl flex-col gap-4 rounded-2xl bg-canvas/70 p-6 text-center backdrop-blur-xs lg:text-left">
          <span className="text-2xl font-medium">Ready to get creative?</span>

          <h2 className="font-display text-3xl lg:text-4xl">
            We'd love to paint with you!
          </h2>
        </div>

        <CTAButton />
      </div>
    </section>
  );
}

export default CTA;
