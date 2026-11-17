import { useEffect, useState } from "react";
import { LuBadge } from "react-icons/lu";
import { CustomLuCoupon } from "@/components/icons";

function CouponButton({ onClick }) {
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
        onClick={onClick}
        className="peer grid aspect-square w-[clamp(4rem,15vw,7rem)] cursor-pointer place-items-center rounded-full drop-shadow-lg transition-[scale,rotate] duration-300 hover:scale-108 hover:rotate-8 focus-visible:ring-3 focus-visible:ring-brand-primary/70 focus-visible:outline-3 focus-visible:-outline-offset-3 focus-visible:outline-brand-secondary"
      >
        <LuBadge
          aria-hidden="true"
          className="col-start-1 row-start-1 size-full fill-brand-accent stroke-0"
        />
        <CustomLuCoupon
          aria-hidden="true"
          className="col-start-1 row-start-1 size-[52%] translate-y-[1.5px] text-canvas"
        />
      </button>

      <span
        aria-hidden="true"
        className={`pointer-events-none absolute bottom-full left-1/2 mb-4 w-max -translate-x-1/2 translate-y-3 scale-70 rounded-md bg-[#57425b] p-2 text-sm text-canvas opacity-0 drop-shadow-lg transition-[opacity,scale,translate] delay-0 duration-250 after:absolute after:-bottom-1 after:left-1/2 after:size-2.5 after:-translate-x-1/2 after:rotate-45 after:bg-[#57425b] ${
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
