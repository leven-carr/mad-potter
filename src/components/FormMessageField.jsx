import { Field, Label, Textarea } from "@headlessui/react";

function FormMessageField() {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-sm text-ink-base/80 uppercase" passive>
        Message <span className="text-xs italic">(Required)</span>
      </Label>
      <Textarea
        rows={5}
        placeholder="I'm interested in booking a party..."
        className="resize-none rounded-lg border-2 border-ink-base/15 bg-canvas p-2 caret-brand-primary/70 duration-100 outline-none placeholder:text-ink-base/40 placeholder:italic hover:border-brand-primary/30 focus:border-brand-primary/70 focus:bg-brand-secondary/70"
      ></Textarea>
    </Field>
  );
}

export default FormMessageField;
