import React from "react";
import logoLight from "../assets/images/logo-light.svg";
import { IoChevronBackCircle } from "react-icons/io5";

function Navbar() {
  return (
    <header className="w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex min-h-16 max-w-6xl items-center justify-between px-5">
        <a
          href="/"
          className="flex items-center rounded-sm py-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
        >
          <img src={logoLight} alt="Mad Potter - Home" className="h-6 w-auto" />
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 hover:text-brand-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary"
        >
          <IoChevronBackCircle className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
