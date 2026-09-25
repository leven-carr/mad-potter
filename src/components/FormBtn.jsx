import { Button } from "@headlessui/react";

function FormBtn({ type = "button", children }) {
  return (
    <Button
      type={type}
      className="mt-2 cursor-pointer rounded-lg border-2 border-ink-base/15 bg-canvas p-2 text-sm text-ink-base/80 uppercase duration-100 outline-none hover:border-brand-primary/30 hover:bg-brand-secondary/70 focus:border-brand-primary/70 focus:bg-brand-secondary/70 active:border-[#b0dcd0] active:bg-[#b0dcd0]/70"
    >
      {children}
    </Button>
  );
}

export default FormBtn;
