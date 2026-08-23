import { useState } from "react";
import { Link } from "react-router";
import { IoChevronBackCircle } from "react-icons/io5";
import { NAV_LINKS } from "../constants/navigation";
import NavLinkItem from "./NavLinkItem";
import MobileMenu from "./MobileMenu";
import logoLight from "../assets/images/logo-light.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-4.5 md:gap-10 lg:min-h-22 lg:gap-16 lg:px-10">
        <Link
          to="/"
          end
          className="flex items-center interactive rounded-sm px-1.5 py-2.5"
        >
          <img
            src={logoLight}
            alt="Mad Potter - Home"
            className="h-6 w-auto lg:h-8"
          />
        </Link>

        <nav className="hidden items-center justify-around text-lg md:flex md:flex-1 lg:text-xl">
          {NAV_LINKS.map((item) => (
            <NavLinkItem key={item.to} link={item} />
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex cursor-pointer items-center justify-center interactive rounded-sm p-1.5 md:hidden ${mobileMenuOpen && "text-brand-hover"}`}
        >
          <IoChevronBackCircle
            aria-hidden="true"
            className={`h-8 w-8 transition-transform duration-500 ${mobileMenuOpen && "rotate-180"}`}
          />
        </button>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        links={NAV_LINKS}
      />
    </header>
  );
}

export default Navbar;
