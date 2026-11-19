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
import { cn } from "@/utils/cn";

function FormSelectField({
  label = "",
  placeholder = "",
  options = [],
  value,
  errorMsg,
  onChange,
}) {
  return (
    <Field className="flex flex-col gap-1">
      <Label className="text-ink-base/80" passive>
        {label} <span className="text-xs uppercase italic">(Required)</span>
      </Label>

      <Listbox value={value} onChange={onChange}>
        <ListboxButton
          className={cn(
            // Base layout & appearance
            "flex w-full items-center justify-between rounded-lg border-2 bg-canvas p-2 text-left focus:outline-none",
            // Focus & open border color
            "focus:border-brand-primary/70 data-open:border-brand-primary/70",
            // Error vs. default border
            errorMsg
              ? "border-brand-accent/70"
              : "border-ink-base/15 hover:border-brand-primary/30",
            // Anchored bottom (menu below button)
            "data-open:[body:has([data-anchor~=bottom])_&]:rounded-b-none",
            "data-open:[body:has([data-anchor~=bottom])_&]:border-b-transparent",
            // Anchored top (menu above button)
            "data-open:[body:has([data-anchor~=top])_&]:rounded-t-none",
            "data-open:[body:has([data-anchor~=top])_&]:border-t-transparent",
          )}
        >
          {value ? (
            <span>{value}</span>
          ) : (
            <span className="text-ink-base/40 italic">{placeholder}</span>
          )}

          <IoChevronDown className="pointer-events-none size-5 text-ink-base/40" />
        </ListboxButton>

        <ListboxOptions
          modal={false}
          anchor="bottom start"
          className={cn(
            // Base layout & appearance
            "relative w-(--button-width) overflow-hidden rounded-lg border-2 border-ink-base/15 bg-canvas text-left text-ink-base/80 focus:outline-none",
            "[--anchor-gap:-2px] data-open:border-brand-primary/70",
            // Divider line pseudo-element
            "before:absolute before:inset-x-3 before:h-[1.5px] before:bg-ink-base/15",
            // Anchored bottom (menu below button)
            "data-[anchor~=bottom]:rounded-t-none",
            "data-[anchor~=bottom]:before:top-0",
            "data-[anchor~=bottom]:data-open:border-t-0",
            "data-[anchor~=bottom]:data-open:drop-shadow-lg",
            // Anchored top (menu above button)
            "data-[anchor~=top]:rounded-b-none",
            "data-[anchor~=top]:before:bottom-0",
            "data-[anchor~=top]:data-open:border-b-0",
          )}
        >
          {options.map((option) => (
            <ListboxOption
              key={option.id}
              value={option.name}
              className="p-2 hover:bg-brand-secondary/70 data-focus:bg-brand-secondary/70"
            >
              {option.name}
            </ListboxOption>
          ))}
        </ListboxOptions>
      </Listbox>

      {errorMsg && <FormErrorMessage>{errorMsg}</FormErrorMessage>}
    </Field>
  );
}

export default FormSelectField;
