import React from "react";
import logoLight from "../assets/images/logo-light.svg";
import { IoChevronBackCircle } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";

function Navbar() {
  return (
    <header className="w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 lg:min-h-22 lg:px-10">
        <a
          href="/"
          className="flex items-center rounded-sm py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
        >
          <img
            src={logoLight}
            alt="Mad Potter - Home"
            className="h-6 w-auto lg:h-8"
          />
        </a>

        <nav className="hidden items-center justify-evenly text-lg tracking-wide lg:text-2xl md:flex md:flex-1">
          <a href="/" className="py-2.5 hover:text-brand-accent-hover">
            Parties & Keepsakes
          </a>

          <a href="/" className="py-2.5 hover:text-brand-accent-hover">
            Gallery
          </a>
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start py-2.5 hover:text-brand-accent-hover"
          >
            <span>Calendar</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <FiExternalLink
              aria-hidden="true"
              className="ml-0.5 h-4 w-4 lg:h-5 lg:w-5"
            />
          </a>
          <a href="/" className="py-2.5 hover:text-brand-accent-hover">
            Contact Us
          </a>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 hover:text-brand-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary md:hidden"
        >
          <IoChevronBackCircle aria-hidden="true" className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
