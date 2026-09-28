import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import FormBtn from "./FormBtn";

function FormSuccessModal({ isOpen, onClose }) {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-ink-deep/30 backdrop-blur-xs transition-opacity duration-300 data-closed:opacity-0"
      />
      <div className="fixed inset-0 flex items-center justify-center p-6">
        <DialogPanel className="flex w-full max-w-md flex-col items-center gap-4 rounded-2xl bg-brand-primary p-8 text-brand-secondary">
          <DialogTitle className="font-display text-2xl">
            Thank you!
          </DialogTitle>
          <p className="text-center text-lg">
            We've received your message and will get back to you as soon as we
            can!
          </p>
          <FormBtn
            className="px-6 active:border-brand-accent active:bg-brand-accent/70 active:text-brand-secondary"
            onClick={onClose}
          >
            Close
          </FormBtn>
        </DialogPanel>
      </div>
    </Dialog>
  );
}

export default FormSuccessModal;
