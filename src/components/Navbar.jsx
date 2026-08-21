import { useState } from "react";
import { Link } from "react-router";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { IoChevronBackCircle } from "react-icons/io5";
import logoLight from "../assets/images/logo-light.svg";
import { NAV_LINKS } from "../constants/navigation";
import NavLinkItem from "./NavLinkItem";

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

        <nav className="hidden items-center justify-around text-lg tracking-wide md:flex md:flex-1 lg:text-xl">
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

      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="relative md:hidden"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-ink-deep/30 backdrop-blur-xs transition-opacity duration-500 data-closed:opacity-0"
        />

        <div className="fixed inset-0">
          <DialogPanel
            as="nav"
            aria-label="Mobile menu"
            transition
            className="fixed top-16 right-0 bottom-0 -mt-0.5 flex w-full max-w-56 flex-col gap-6 bg-brand-primary px-10 py-6 text-center text-lg text-brand-secondary transition duration-500 data-closed:translate-x-full"
          >
            {NAV_LINKS.map((item) => (
              <CloseButton key={item.to} as={NavLinkItem} link={item} />
            ))}
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}

export default Navbar;
