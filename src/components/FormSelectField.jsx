import { useState } from "react";
import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { IoChevronDown } from "react-icons/io5";

const subjects = [
  { id: 1, name: "Parties & Keepsakes" },
  { id: 2, name: "Custom Orders" },
  { id: 3, name: "Something else..." },
];
function FormSelectField() {
  const [selectedSubject, setSelectedSubject] = useState(null);

  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-ink-base/80" passive>
        How can we help you?{" "}
        <span className="text-xs uppercase italic">(Required)</span>
      </Label>
      <Listbox value={selectedSubject} onChange={setSelectedSubject}>
        <ListboxButton className="flex w-full items-center justify-between rounded-lg border-2 border-ink-base/15 bg-canvas p-2 text-left hover:border-brand-primary/30 focus:border-brand-primary/70 focus:outline-none data-open:rounded-b-none data-open:border-b-0 data-open:border-brand-primary/70">
          {selectedSubject ? (
            <span>{selectedSubject.name}</span>
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
          className="relative w-(--button-width) overflow-hidden rounded-lg rounded-t-none border-2 border-ink-base/15 bg-canvas text-left text-ink-base/80 before:absolute before:top-0 before:right-3 before:left-3 before:h-[1.5px] before:bg-ink-base/15 focus:outline-none data-open:border-t-0 data-open:border-brand-primary/70 data-open:shadow-lg"
        >
          {subjects.map((subject) => (
            <ListboxOption
              key={subject.id}
              value={subject}
              className="p-2 hover:bg-brand-secondary/70 data-focus:bg-brand-secondary/70"
            >
              {subject.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>
    </Field>
  );
}

export default FormSelectField;
