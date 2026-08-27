import { FaMapPin, FaFacebook, FaInstagram } from "react-icons/fa6";
import { CustomTbPhone, CustomLuMail } from "./icons";
import { NAV_LINKS } from "../constants/navigation";
import NavLinkItem from "./NavLinkItem";
import ShapeDivider from "./ShapeDivider";
import HorizontalRule from "./HorizontalRule";
import logoSubmark from "../assets/images/logo-submark.svg";

function Footer() {
  return (
    <>
      <footer className="relative w-full bg-brand-primary text-brand-secondary">
        <ShapeDivider />
        <div className="mx-auto footer-grid max-w-7xl px-6 py-8">
          <section className="footer-contact flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Contact Us
            </h2>
            <div className="flex flex-row items-center justify-start gap-2">
              <FaMapPin className="text-xl" />
              <address className="contents not-italic">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=mad+potter&query_place_id=ChIJPbeUr11XQIgRST__1RTQno4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive p-2"
                >
                  6680 Tri Way Dr, Mason, OH 45040
                </a>
              </address>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <CustomTbPhone className="text-xl" />
              <a href="tel:+15137705585" className="interactive p-2">
                513-770-5585
              </a>
            </div>
            <div className="flex flex-row items-center justify-start gap-2">
              <CustomLuMail className="text-xl" />
              <a
                href="mailto:madpottermason@yahoo.com"
                className="interactive p-2"
              >
                madpottermason@yahoo.com
              </a>
            </div>
          </section>

          <HorizontalRule className="footer-rule-left w-60 fill-brand-secondary" />

          <section className="footer-hours flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Hours
            </h2>
            <div className="flex gap-4 p-2">
              <span className="font-semibold">Sun: </span>
              <span>1 – 6 PM</span>
            </div>
            <div className="flex gap-4 p-2">
              <span className="font-semibold">Mon – Fri: </span>
              <span>11 AM – 9 PM</span>
            </div>
            <div className="flex gap-4 p-2">
              <span className="font-semibold">Sat: </span>
              <span>10 AM – 9 PM</span>
            </div>
          </section>

          <HorizontalRule className="w-60 fill-brand-secondary md:hidden" />

          <section className="footer-links flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Links
            </h2>
            <nav className="flex flex-wrap items-center justify-center gap-2">
              <NavLinkItem
                link={{ to: "/", label: "Home" }}
                className="interactive p-2"
              />

              {NAV_LINKS.map((item) => (
                <NavLinkItem
                  key={item.to}
                  link={item}
                  className="interactive p-2"
                />
              ))}
            </nav>
          </section>

          <HorizontalRule className="footer-rule-right w-60 fill-brand-secondary" />

          <section className="footer-socials flex flex-col">
            <h2 className="text-center text-lg leading-loose font-semibold">
              Social Media
            </h2>
            <div className="mt-1 flex justify-center gap-6 text-4xl">
              <a
                href="https://www.facebook.com/madpotterstudiomason/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Facebook"
                className="interactive p-2"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.instagram.com/madpottermason/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit us on Instagram"
                className="interactive p-2"
              >
                <FaInstagram />
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
