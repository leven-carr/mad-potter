import { useState } from "react";
import { Link, NavLink } from "react-router";
import {
  Dialog,
  DialogPanel,
  DialogBackdrop,
  CloseButton,
} from "@headlessui/react";
import { IoChevronBackCircle } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import logoLight from "../assets/images/logo-light.svg";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 md:gap-10 lg:min-h-22 lg:gap-16 lg:px-10">
        <Link
          to="/"
          end
          className="flex items-center rounded-sm py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
        >
          <img
            src={logoLight}
            alt="Mad Potter - Home"
            className="h-6 w-auto lg:h-8"
          />
        </Link>

        <nav className="hidden items-center justify-around text-lg tracking-wide md:flex md:flex-1 lg:text-xl">
          <NavLink to="/parties-and-keepsakes" className="nav-link">
            Parties & Keepsakes
          </NavLink>

          <NavLink to="/gallery" className="nav-link">
            Gallery
          </NavLink>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start nav-link"
          >
            <span>Calendar</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <FiExternalLink
              aria-hidden="true"
              className="ml-0.5 h-4 w-4 lg:h-5 lg:w-5"
            />
          </a>

          <NavLink to="/contact-us" className="nav-link">
            Contact Us
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label="Toggle mobile menu"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`flex cursor-pointer items-center justify-center rounded-sm p-1.5 transition-colors duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary md:hidden ${mobileMenuOpen && "text-brand-hover"}`}
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
            className="fixed top-16 right-0 bottom-0 -mt-0.5 flex w-full max-w-64 flex-col gap-6 bg-brand-primary px-10 py-6 text-center text-lg text-brand-secondary transition duration-500 data-closed:translate-x-full"
          >
            <CloseButton
              as={NavLink}
              to="/parties-and-keepsakes"
              className="nav-link"
            >
              Parties & Keepsakes
            </CloseButton>

            <CloseButton as={NavLink} to="/gallery" className="nav-link">
              Gallery
            </CloseButton>

            <CloseButton
              as="a"
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-center nav-link"
            >
              <span>Calendar</span>
              <span className="sr-only"> (opens in a new tab)</span>
              <FiExternalLink
                aria-hidden="true"
                className="ml-0.5 h-4 w-4 lg:h-5 lg:w-5"
              />
            </CloseButton>

            <CloseButton as={NavLink} to="/contact-us" className="nav-link">
              Contact Us
            </CloseButton>
          </DialogPanel>
        </div>
      </Dialog>
    </header>
  );
}

export default Navbar;
