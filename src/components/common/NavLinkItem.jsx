import { NavLink } from "react-router";
import { FiExternalLink } from "react-icons/fi";
import { cn } from "@/utils/cn";

function NavLinkItem({ link, className, children, ...props }) {
  if (link.isExternal) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          "inline-flex items-start rounded-lg p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary",
          className,
        )}
        {...props}
      >
        <span>{link.label}</span>
        <span className="sr-only"> (opens in a new tab)</span>
        <FiExternalLink aria-hidden="true" className="ml-0.5" />
      </a>
    );
  }

  return (
    <NavLink
      to={link.to}
      className={({ isActive }) =>
        cn(
          "rounded-lg p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-brand-secondary",
          typeof className === "function" ? className({ isActive }) : className,
        )
      }
      {...props}
    >
      {link.label}
      {children}
    </NavLink>
  );
}

export default NavLinkItem;
