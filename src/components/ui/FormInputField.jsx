import { Field, Label, Input } from "@headlessui/react";
import { PatternFormat } from "react-number-format";
import FormErrorMessage from "./FormErrorMessage";

function FormInputField({
  label = "",
  type = "text",
  placeholder = "",
  name,
  value,
  errorMsg,
  onChange,
}) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-sm text-ink-base/80 uppercase" passive>
        {label} <span className="text-xs italic">(Required)</span>
      </Label>

      {type === "tel" ? (
        <PatternFormat
          type="tel"
          format="(###) ###-####"
          mask=" "
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`rounded-lg border-2 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic focus:border-brand-primary/70 focus:bg-brand-secondary/70 ${errorMsg ? "border-brand-accent/70" : "border-ink-base/15 hover:border-brand-primary/30"}`}
        />
      ) : (
        <Input
          name={name}
          value={value}
          onChange={onChange}
          type={type}
          placeholder={placeholder}
          className={`rounded-lg border-2 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic focus:border-brand-primary/70 focus:bg-brand-secondary/70 ${errorMsg ? "border-brand-accent/70" : "border-ink-base/15 hover:border-brand-primary/30"}`}
        />
      )}

      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </Field>
  );
}

export default FormInputField;
