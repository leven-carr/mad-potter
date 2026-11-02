import { cn } from "../utils/cn";

function LayoutWrapper({ className, children }) {
  return (
    <div
      className={cn(
        "mx-auto flex max-w-7xl flex-col items-center gap-6 px-6 py-8 lg:px-10 lg:py-12",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default LayoutWrapper;
