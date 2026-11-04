import { FaFacebook, FaInstagram } from "react-icons/fa6";
import { CONTACT_CONFIG, businessInfo } from "@/constants/businessInfo";
import { NAV_LINKS } from "@/constants/navigation";
import ShapeDivider from "@/components/ui/ShapeDivider";
import HorizontalRule from "@/components/ui/HorizontalRule";
import ContactRow from "./ContactRow";
import HoursRow from "./HoursRow";
import NavLinkItem from "./NavLinkItem";
import logoSubmark from "@/assets/images/logo-submark.svg";

function Footer() {
  const { hours } = businessInfo;
  return (
    <>
      <footer className="relative w-full bg-brand-primary text-brand-secondary">
        <ShapeDivider />
        <div className="footer-grid mx-auto max-w-7xl px-6 py-8">
          <section className="footer-contact flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Contact Us
            </h2>
            <div className="flex flex-col">
              {CONTACT_CONFIG.map((contactMethod) => {
                return (
                  <ContactRow key={contactMethod.id} data={contactMethod} />
                );
              })}
            </div>
          </section>

          <HorizontalRule className="footer-rule-left w-60 fill-brand-secondary" />

          <section className="footer-hours mb-2 flex flex-col gap-2">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Hours
            </h2>
            <div className="flex flex-col gap-4">
              {hours.map((days, index) => {
                return <HoursRow key={index} data={days} />;
              })}
            </div>
          </section>

          <HorizontalRule className="w-60 fill-brand-secondary md:hidden" />

          <section className="footer-links flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Links
            </h2>
            <nav className="flex flex-wrap items-center justify-center gap-2 gap-y-0">
              <NavLinkItem
                link={{ to: "/", label: "Home" }}
                className="rounded-lg p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary"
              />

              {NAV_LINKS.map((item) => (
                <NavLinkItem
                  key={item.to}
                  link={item}
                  className="rounded-lg p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary"
                />
              ))}
            </nav>
          </section>

          <HorizontalRule className="footer-rule-right w-60 fill-brand-secondary" />

          <section className="footer-socials flex flex-col gap-2">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Social Media
            </h2>
            <div className="flex justify-center gap-6 text-4xl">
              <a
                href="https://www.facebook.com/madpotterstudiomason/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
                className="rounded-full p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary"
              >
                <FaFacebook aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/madpottermason/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
                className="rounded-full p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary"
              >
                <FaInstagram aria-hidden="true" />
              </a>
            </div>
          </section>

          <img
            src={logoSubmark}
            alt="Mad Potter"
            className="footer-logo max-w-64 md:max-w-80"
          />

          <p className="footer-notice">
            <strong>Disclaimer:</strong> This website is an unofficial frontend
            development concept redesign created for portfolio use. It is not
            affiliated with nor endorsed by Mad Potter.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
