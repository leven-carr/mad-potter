import PageHeading from "./PageHeading";
import ContactForm from "./ContactForm";
import ConnectTab from "./ConnectTab";
import HoursTab from "./HoursTab";
import { CONTACT_CONFIG } from "../constants/businessInfo";

function VisitUs() {
  return (
    <section className="w-full">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 py-8 lg:flex-row lg:justify-around lg:px-10 lg:py-12">
        <div className="flex flex-col gap-8">
          {/* Title Card */}
          <div className="flex w-full max-w-xl flex-col gap-4">
            <PageHeading className="text-left">Visit Us Today!</PageHeading>
            <p className="text-lg">
              Planning ahead? Feel free to get in touch with us via phone or
              email, or use our contact form and we'll get back to you as soon
              as possible.
            </p>
          </div>

          {/* Form */}
          <ContactForm />
        </div>

        {/* Connect and Hours */}
        <div className="flex max-w-xl flex-col gap-8 py-6">
          {CONTACT_CONFIG.map((contactMethod) => {
            return <ConnectTab key={contactMethod.id} data={contactMethod} />;
          })}
          <HoursTab />
        </div>
      </div>
    </section>
  );
}

export default VisitUs;
