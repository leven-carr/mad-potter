import { cn } from "../utils/cn";

function SectionHeading({ className, children }) {
  return (
    <h2
      className={cn(
        "text-center font-display text-[32px] lg:text-4xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export default SectionHeading;
