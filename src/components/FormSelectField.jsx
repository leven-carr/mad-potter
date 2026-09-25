import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";
import FormErrorMessage from "./FormErrorMessage";

const subjects = [
  { id: 1, title: "Parties & Keepsakes" },
  { id: 2, title: "Custom Orders" },
  { id: 3, title: "Something else..." },
];
function FormSelectField({ value, onChange, errorMsg }) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-ink-base/80" passive>
        How can we help you?{" "}
        <span className="text-xs uppercase italic">(Required)</span>
      </Label>
      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          className={`flex w-full items-center justify-between rounded-lg border-2 bg-canvas p-2 text-left focus:border-brand-primary/70 focus:outline-none data-open:rounded-b-none data-open:border-brand-primary/70 data-open:border-b-transparent ${errorMsg ? "border-brand-accent/70" : "border-ink-base/15 hover:border-brand-primary/30"}`}
        >
          {value ? (
            <span>{value}</span>
          ) : (
            <span className="text-ink-base/40 italic">
              Please select a subject
            </span>
          )}

          <IoChevronDown className="pointer-events-none size-5 text-ink-base/40" />
        </ListboxButton>

        <ListboxOptions
          modal={false}
          anchor="bottom start"
          className="relative w-(--button-width) overflow-hidden rounded-lg rounded-t-none border-2 border-ink-base/15 bg-canvas text-left text-ink-base/80 [--anchor-gap:-2px] before:absolute before:inset-x-3 before:top-0 before:h-[1.5px] before:bg-ink-base/15 focus:outline-none data-open:border-t-0 data-open:border-brand-primary/70 data-open:shadow-lg"
        >
          {subjects.map((subject) => (
            <ListboxOption
              key={subject.id}
              value={subject.title}
              className="p-2 hover:bg-brand-secondary/70 data-focus:bg-brand-secondary/70"
            >
              {subject.title}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </Field>
  );
}

export default FormSelectField;
