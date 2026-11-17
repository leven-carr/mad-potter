import { useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  CloseButton,
} from "@headlessui/react";
import CouponButton from "@/components/common/CouponButton";
import CouponShape from "@/components/common/CouponShape";

function CouponModal() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <CouponButton onClick={open} />

      <Dialog open={isOpen} onClose={close}>
        <DialogBackdrop className="fixed inset-0 z-backdrop bg-ink-deep/60 backdrop-blur-xs" />

        <div className="fixed inset-0 z-modal flex items-center justify-center">
          <DialogPanel className="flex w-full max-w-lg flex-col items-center gap-6 p-6">
            <div className="mx-auto grid max-w-md grid-cols-[2fr_1fr] gap-3">
              <CouponShape
                aria-hidden="true"
                className="col-span-2 col-start-1 row-start-1 max-w-md"
              />

              {/* Left Content */}
              <div className="col-start-1 row-start-1 flex flex-col gap-2 p-2 px-4 text-canvas xs:p-4 min-[500px]:gap-4 min-[500px]:p-6">
                <div className="flex flex-col gap-1">
                  <span className="text-[clamp(0.875rem,4.5vw,1.25rem)] leading-tight">
                    Mad Potter Mason
                  </span>
                  <span className="text-[clamp(0.875rem,4vw,1rem)] leading-tight">
                    (513) 770-5585
                  </span>
                </div>
                <DialogTitle className="text-center text-[clamp(1rem,7vw,2.25rem)] leading-tight uppercase">
                  $2 Off Purchase*
                </DialogTitle>
              </div>

              {/* Right Content */}
              <div className="col-start-2 row-start-1 flex items-center justify-center">
                <img
                  src="/favicon.svg"
                  alt=""
                  className="mr-2 w-[clamp(4rem,20vw,6.5rem)]"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1 text-base text-canvas italic">
              <p>*One per customer, valid Monday through Friday</p>
              <p>*Cannot be combined with any other discount</p>
            </div>

            <CloseButton className="cursor-pointer self-center rounded-full bg-brand-accent px-7 py-3 text-xl text-canvas hover:bg-brand-hover focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-canvas">
              Close
            </CloseButton>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export default CouponModal;
