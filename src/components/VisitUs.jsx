import LayoutWrapper from "./LayoutWrapper";
import PageHeading from "./PageHeading";
import ContactForm from "./ContactForm";
import ConnectTab from "./ConnectTab";
import HoursTab from "./HoursTab";
import { CONTACT_CONFIG } from "../constants/businessInfo";

function VisitUs() {
  return (
    <section className="w-full">
      <LayoutWrapper className="gap-12 lg:flex-row lg:justify-around lg:pt-6">
        {/* Heading and Form */}
        <div className="flex w-full max-w-xl flex-col gap-4">
          <PageHeading className="text-left">Visit Us Today!</PageHeading>
          <p className="mb-4 text-lg">
            Planning ahead? Feel free to get in touch with us via phone or
            email, or use our contact form and we'll get back to you as soon as
            possible.
          </p>

          <ContactForm />
        </div>

        {/* Connect and Hours */}
        <div className="flex max-w-xl flex-col gap-8 py-6">
          {CONTACT_CONFIG.map((contactMethod) => {
            return <ConnectTab key={contactMethod.id} data={contactMethod} />;
          })}
          <HoursTab />
        </div>
      </LayoutWrapper>
    </section>
  );
}

export default VisitUs;
