import { useEffect, useState } from "react";
import { CustomLuCouponBadge } from "@/components/icons";

function CouponButton() {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsDismissed(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const resetDismiss = () => setIsDismissed(false);

  return (
    <div className="fixed right-4 bottom-4 z-fixed inline-flex">
      <button
        type="button"
        aria-label="View coupon"
        onMouseEnter={resetDismiss}
        onMouseLeave={resetDismiss}
        onFocus={resetDismiss}
        onBlur={resetDismiss}
        className="peer aspect-square w-[clamp(4rem,15vw,6rem)] cursor-pointer rounded-full transition-[scale,rotate] duration-300 hover:scale-108 hover:rotate-8 focus-visible:ring-3 focus-visible:ring-brand-primary/70 focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-brand-secondary"
      >
        <CustomLuCouponBadge aria-hidden="true" className="drop-shadow-lg" />
      </button>

      <span
        role="tooltip"
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-full left-1/2 mb-4 w-max -translate-x-1/2 translate-y-3 scale-70 rounded-md bg-[#57425b] p-2 text-sm text-canvas opacity-0 drop-shadow-vector-dark transition-[opacity,scale,translate] delay-0 duration-250 after:absolute after:-bottom-1 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:rotate-45 after:bg-[#57425b] ${
          !isDismissed
            ? "peer-hover:translate-y-0 peer-hover:scale-100 peer-hover:opacity-100 peer-hover:delay-500 peer-focus-visible:translate-y-0 peer-focus-visible:scale-100 peer-focus-visible:opacity-100 peer-focus-visible:delay-0"
            : ""
        }`}
      >
        View coupon!
      </span>
    </div>
  );
}

export default CouponButton;
