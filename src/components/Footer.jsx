import { FaMapPin, FaFacebook, FaInstagram } from "react-icons/fa6";
import { CustomTbPhone, CustomLuMail } from "./icons";
import { NAV_LINKS } from "../constants/navigation";
import NavLinkItem from "./NavLinkItem";
import HorizontalRule from "./HorizontalRule";
import logoSubmark from "../assets/images/logo-submark.svg";

function Footer() {
  return (
    <footer className="w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-8 px-6 py-10">
        <section className="flex flex-col">
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

        <HorizontalRule className="w-60 fill-brand-secondary" />

        <section className="flex flex-col gap-2">
          <h2 className="text-center text-lg leading-loose font-semibold">
            Hours
          </h2>
          <div className="flex gap-4">
            <span className="font-semibold">Sun: </span>
            <span>1 – 6 PM</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold">Mon – Fri: </span>
            <span>11 AM – 9 PM</span>
          </div>
          <div className="flex gap-4">
            <span className="font-semibold">Sat: </span>
            <span>10 AM – 9 PM</span>
          </div>
        </section>

        <HorizontalRule className="w-60 fill-brand-secondary" />

        <nav className="flex flex-wrap justify-center gap-2">
          <NavLinkItem
            link={{ to: "/", label: "Home" }}
            className="interactive p-3"
          />

          {NAV_LINKS.map((item) => (
            <NavLinkItem
              key={item.to}
              link={item}
              className="interactive p-3"
            />
          ))}
        </nav>

        <HorizontalRule className="w-60 fill-brand-secondary" />

        <section className="flex gap-4 text-3xl">
          <a href="" className="interactive p-2">
            <FaFacebook />
          </a>
          <a href="" className="interactive p-2">
            <FaInstagram />
          </a>
        </section>

        <HorizontalRule className="w-60 fill-brand-secondary" />

        <img src={logoSubmark} alt="Mad Potter" className="max-w-64" />
        <section className="flex gap-2">
          <p>
            <strong>Disclaimer:</strong> This website is an unofficial frontend
            development concept redesign created for portfolio use. It is not
            affiliated with nor endorsed by Mad Potter.
          </p>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
