import reactStringReplace from "react-string-replace";
import NavLinkItem from "./NavLinkItem";
import { ICON_MAP } from "../constants/iconMap";
import { IoChevronDownCircle } from "react-icons/io5";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

function FAQCard({ data }) {
  const { question, answers, iconName, link } = data;

  const Icon = ICON_MAP[iconName];

  function parseAnswer(text) {
    if (!text.includes("[LINK]")) return text;

    return reactStringReplace(text, "[LINK]", (match, i) => (
      <NavLinkItem
        key={i}
        link={link}
        className="interactive text-brand-primary"
      />
    ));
  }

  return (
    <Disclosure
      as="article"
      className="group flex w-full max-w-md flex-col justify-center rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-[10px] md:max-w-xl"
    >
      <DisclosureButton className="flex cursor-pointer flex-col gap-4 interactive transition-[padding] duration-300 ease-in-out data-open:pb-6 md:flex-row md:items-center md:justify-between md:data-open:pb-4">
        <div className="flex items-center gap-4">
          <IoChevronDownCircle className="faq-icon size-10 shrink-0 text-ink-base/25 transition-transform duration-450 ease-in-out group-data-open:rotate-180" />
          <h3 className="text-left indent-[0.35em_hanging] text-xl font-medium">
            "{question}"
          </h3>
        </div>
        <Icon className="size-16 self-center" />
      </DisclosureButton>

      <div className="h-0.5 w-full origin-center scale-x-0 transform-gpu rounded-full bg-ink-base/15 transition-transform duration-450 ease-in-out group-data-open:scale-x-100" />

      <DisclosurePanel
        transition
        className="grid grid-rows-[1fr] overflow-hidden pt-6 transition-[grid-template-rows,padding] duration-300 ease-in-out data-closed:grid-rows-[0fr] data-closed:pt-0"
      >
        <div className="flex flex-col gap-4 overflow-hidden">
          {answers.map((answer, i) => (
            <p key={i} className="text-base font-medium lg:text-lg">
              {parseAnswer(answer)}
            </p>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}

export default FAQCard;
