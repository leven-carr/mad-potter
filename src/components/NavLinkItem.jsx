import { NavLink } from "react-router";
import { FiExternalLink } from "react-icons/fi";

function NavLinkItem({ link, className = "interactive p-2", ...props }) {
  if (link.isExternal) {
    return (
      <a
        href={link.to}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-start justify-center ${className}`}
        {...props}
      >
        <span>{link.label}</span>
        <span className="sr-only"> (opens in a new tab)</span>
        <FiExternalLink
          aria-hidden="true"
          className="ml-0.5 h-4 w-4 lg:h-5 lg:w-5"
        />
      </a>
    );
  }

  return (
    <NavLink to={link.to} className={className} {...props}>
      {link.label}
    </NavLink>
  );
}

export default NavLinkItem;
