import { Description } from "@headlessui/react";
import { FiAlertCircle } from "react-icons/fi";

function FormErrorMessage({ children }) {
  return (
    <div className="mt-1 flex items-start gap-1 text-sm leading-tight text-brand-accent">
      <FiAlertCircle className="size-4" />
      <Description>{children}</Description>
    </div>
  );
}

export default FormErrorMessage;
