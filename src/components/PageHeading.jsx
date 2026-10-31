import { cn } from "../utils/cn";

function PageHeading({ className, children }) {
  return (
    <h1
      className={cn(
        "text-center font-display text-3xl leading-snug xs:text-4xl lg:text-[44px]",
        className,
      )}
    >
      {children}
    </h1>
  );
}

export default PageHeading;
