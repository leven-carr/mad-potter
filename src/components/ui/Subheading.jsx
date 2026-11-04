import { cn } from "@/utils/cn";

function Subheading({ className, children }) {
  return (
    <span className={cn("block text-center text-2xl font-medium", className)}>
      {children}
    </span>
  );
}

export default Subheading;
