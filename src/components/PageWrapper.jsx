import { cn } from "../utils/cn";

function PageWrapper({ className, children }) {
  return (
    <div className={cn("w-full pt-4 pb-32 lg:pt-12 lg:pb-36", className)}>
      {children}
    </div>
  );
}

export default PageWrapper;
