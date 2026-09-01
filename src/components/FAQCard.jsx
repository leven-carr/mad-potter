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
      className="flex w-full max-w-md flex-col justify-center gap-6 divide-y-2 divide-ink-base/15 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-[10px] md:max-w-xl"
    >
      <DisclosureButton className="group flex flex-col gap-4 data-open:pb-6 md:flex-row md:items-center md:justify-between">
        <div className="flex w-fit items-center gap-4">
          <IoChevronDownCircle className="size-10 shrink-0 text-ink-base/25" />
          <h3 className="text-left indent-[0.35em_hanging] text-xl font-medium">
            "{question}"
          </h3>
        </div>
        <Icon className="size-16 self-center" />
      </DisclosureButton>

      <DisclosurePanel className="flex flex-col gap-4">
        {answers.map((answer, i) => (
          <p key={i} className="text-medium font-medium">
            {parseAnswer(answer)}
          </p>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}

export default FAQCard;
