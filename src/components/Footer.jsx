import { FaMapPin, FaFacebook, FaInstagram } from "react-icons/fa6";
import { CustomTbPhone, CustomLuMail } from "./icons";
import { NAV_LINKS } from "../constants/navigation";
import NavLinkItem from "./NavLinkItem";

function Footer() {
  return (
    <footer className="w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-10 py-10">
        <section className="flex flex-col gap-2 px-6">
          <h2 className="text-center text-lg font-semibold">Contact Us</h2>
          <div className="flex flex-row items-center justify-start gap-4">
            <FaMapPin className="text-xl" />
            <address className="not-italic">
              6680 Tri Way Dr, Mason, OH 45040
            </address>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <CustomTbPhone className="text-xl" />
            <a href="tel:+15137705585">513-770-5585</a>
          </div>
          <div className="flex flex-row items-center justify-start gap-4">
            <CustomLuMail className="text-xl" />
            <a href="mailto:madpottermason@yahoo.com">
              madpottermason@yahoo.com
            </a>
          </div>
        </section>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="w-60"
        >
          <path
            fill="#F0DCFE"
            d="M990 45H535l-35-35-35 35H10v10h455l35 35 35-35h455V45z"
          ></path>
        </svg>

        <section className="flex flex-col gap-2 px-6">
          <h2 className="text-center text-lg font-semibold">Hours</h2>
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

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="w-60"
        >
          <path
            fill="#F0DCFE"
            d="M990 45H535l-35-35-35 35H10v10h455l35 35 35-35h455V45z"
          ></path>
        </svg>

        <nav className="flex flex-wrap justify-center gap-2 px-6">
          {NAV_LINKS.map((item) => (
            <NavLinkItem
              key={item.to}
              link={item}
              className="interactive p-3"
            />
          ))}
        </nav>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          className="w-60"
        >
          <path
            fill="#F0DCFE"
            d="M990 45H535l-35-35-35 35H10v10h455l35 35 35-35h455V45z"
          ></path>
        </svg>

        <section className="flex gap-4 px-6 text-3xl">
          <a href="" className="interactive p-2">
            <FaFacebook />
          </a>
          <a href="" className="interactive p-2">
            <FaInstagram />
          </a>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
