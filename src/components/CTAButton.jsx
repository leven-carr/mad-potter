import NavLinkItem from "./NavLinkItem";

function CTAButton() {
  return (
    <NavLinkItem
      link={{ to: "/contact-us", label: "Plan Your Visit" }}
      className="cta-button group relative cursor-pointer interactive rounded-full bg-brand-accent px-10 py-6 text-2xl font-medium tracking-wide text-canvas shadow-lg"
    >
      <svg
        width="331"
        height="93"
        viewBox="0 0 331 93"
        fill="none"
        strokeLinecap="round"
        xmlns="http://www.w3.org/2000/svg"
        className="pointer-events-none absolute -inset-x-11 -inset-y-1.5 scale-90 stroke-brand-accent stroke-4 opacity-0 transition-all duration-400 ease-bounce group-hover:scale-100 group-hover:opacity-100"
      >
        <path d="M316.602 90.5867L297 80.5989" />
        <path d="M328.078 46.0005H304.078" />
        <path d="M316.602 2.00049L297 11.9883" />
        <path d="M13.4758 90.5867L33.078 80.5989" />
        <path d="M2 46.0005H26" />
        <path d="M13.4759 2.00049L33.078 11.9883" />
      </svg>
    </NavLinkItem>
  );
}

export default CTAButton;
