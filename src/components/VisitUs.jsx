import ContactForm from "./ContactForm";
import ContactAction from "./ContactAction";
import ContactHours from "./ContactHours";
import { CONTACT_CONFIG } from "../constants/businessInfo";

function VisitUs() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-8 lg:flex-row lg:justify-around lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8">
          {/* Title Card */}
          <div className="flex w-full max-w-xl flex-col justify-center gap-6">
            <h2 className="text-left font-display text-3xl lg:text-5xl">
              Visit Us Today!
            </h2>
            <p className="text-lg">
              Planning ahead? Feel free to get in touch with us via phone or
              email, or use our contact form and we'll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Form */}
          <ContactForm />
        </div>

        {/* Contact Actions and Hours */}
        <div className="flex max-w-xl flex-col gap-8 py-6">
          {CONTACT_CONFIG.map((contactMethod) => {
            return (
              <ContactAction key={contactMethod.id} data={contactMethod} />
            );
          })}
          <ContactHours />
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
