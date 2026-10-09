function ContactTabLayout({
  as: Component = "div",
  icon: Icon,
  title,
  children,
  ...props
}) {
  const isLink = Component === "a";

  return (
    <Component
      className={`flex w-fit max-w-full items-center gap-6 rounded-2xl transition-all duration-300 ${isLink ? "group focus:outline-none" : ""}`}
      {...props}
    >
      <div className="flex items-center justify-center self-start rounded-full bg-brand-accent p-4 shadow-xl transition-[background-color,scale] duration-300 group-hover:scale-105 group-hover:bg-brand-hover group-focus-visible:outline-3 group-focus-visible:outline-offset-3 group-focus-visible:outline-brand-primary/70">
        <Icon aria-hidden="true" className="size-8 text-canvas" />
      </div>

      <div className="flex flex-col items-start">
        <span className="border-b-2 border-ink-base/15 pb-1 text-lg text-ink-base/80">
          {title}
        </span>

        <div className="pt-1 text-xl">{children}</div>
      </div>
    </Component>
  );
}

export default ContactTabLayout;
