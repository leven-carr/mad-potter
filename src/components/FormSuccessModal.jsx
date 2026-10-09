import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  CloseButton,
} from "@headlessui/react";
import BunnyMail from "./BunnyMail";

function FormSuccessModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-ink-deep/30 backdrop-blur-xs"
      />
      <div className="fixed inset-0 flex items-center justify-center p-6">
        <DialogPanel className="flex w-full max-w-md flex-col overflow-hidden rounded-xl">
          <div className="flex items-center justify-center bg-brand-primary p-6 text-brand-secondary">
            <BunnyMail className="size-32" />
          </div>
          <div className="flex flex-col items-center gap-5 bg-canvas p-10">
            <DialogTitle className="lg:4xl font-display text-3xl">
              Thank you!
            </DialogTitle>
            <p className="text-center text-lg">
              We've received your message and will get back to you as soon as we
              can!
            </p>
            <CloseButton className="mt-2 cursor-pointer rounded-full bg-brand-accent px-6 py-2 text-lg text-canvas hover:bg-brand-hover focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-primary/70">
              Close
            </CloseButton>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default FormSuccessModal;
