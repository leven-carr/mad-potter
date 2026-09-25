import { Field, Label, Textarea } from "@headlessui/react";
import FormErrorMessage from "./FormErrorMessage";

function FormMessageField({ value, onChange, errorMsg }) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-sm text-ink-base/80 uppercase" passive>
        Message <span className="text-xs italic">(Required)</span>
      </Label>
      <Textarea
        name="message"
        value={value}
        onChange={onChange}
        rows={5}
        placeholder="I'm interested in booking a party..."
        className={`resize-none rounded-lg border-2 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic focus:border-brand-primary/70 focus:bg-brand-secondary/70 ${errorMsg ? "border-brand-accent/70" : "border-ink-base/15 hover:border-brand-primary/30"}`}
      ></Textarea>

      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </Field>
  );
}

export default FormMessageField;
