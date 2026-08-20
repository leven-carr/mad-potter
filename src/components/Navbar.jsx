import React from "react";
import { Link, NavLink } from "react-router";
import { IoChevronBackCircle } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import logoLight from "../assets/images/logo-light.svg";

function Navbar() {
  return (
    <header className="w-full bg-brand-primary text-brand-secondary">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between px-6 md:gap-16 lg:min-h-22 lg:px-10">
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

        <nav className="hidden items-center justify-between text-lg tracking-wide md:flex md:flex-1 lg:text-2xl">
          <NavLink
            to="/parties-and-keepsakes"
            className="hover:text-brand-hover aria-[current=page]:text-brand-active"
          >
            Parties & Keepsakes
          </NavLink>

          <NavLink
            to="/gallery"
            className="hover:text-brand-hover aria-[current=page]:text-brand-active"
          >
            Gallery
          </NavLink>

          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start hover:text-brand-hover"
          >
            <span>Calendar</span>
            <span className="sr-only"> (opens in a new tab)</span>
            <FiExternalLink
              aria-hidden="true"
              className="ml-0.5 h-4 w-4 lg:h-5 lg:w-5"
            />
          </a>

          <NavLink
            to="/contact-us"
            className="hover:text-brand-hover aria-[current=page]:text-brand-active"
          >
            Contact Us
          </NavLink>
        </nav>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="flex cursor-pointer items-center justify-center rounded-sm p-1.5 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-secondary md:hidden"
        >
          <IoChevronBackCircle aria-hidden="true" className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
}

export default Navbar;
