import { Field, Label, Textarea } from "@headlessui/react";
import FormErrorMessage from "./FormErrorMessage";

function FormTextField({
  label = "",
  placeholder = "",
  name,
  value,
  errorMsg,
  onChange,
  ...props
}) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-sm text-ink-base/80 uppercase" passive>
        {label} <span className="text-xs italic">(Required)</span>
      </Label>
      <Textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`resize-none rounded-lg border-2 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic focus:border-brand-primary/70 focus:bg-brand-secondary/70 ${errorMsg ? "border-brand-accent/70" : "border-ink-base/15 hover:border-brand-primary/30"}`}
        {...props}
      ></Textarea>

      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </Field>
  );
}

export default FormTextField;
