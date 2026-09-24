import { Field, Label, Input } from "@headlessui/react";

function FormInputField({ label = "", type = "text", placeholder = "" }) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-sm text-ink-base/80 uppercase" passive>
        {label} <span className="text-xs italic">(Required)</span>
      </Label>
      <Input
        type={type}
        placeholder={placeholder}
        className="rounded-lg border-2 border-ink-base/15 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic hover:border-brand-primary/30 focus:border-brand-primary/70 focus:bg-brand-secondary/70"
        required
      />
    </Field>
  );
}

export default FormInputField;
