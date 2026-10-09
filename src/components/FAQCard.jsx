import { useRef } from "react";
import reactStringReplace from "react-string-replace";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { IoChevronDownCircle } from "react-icons/io5";
import NavLinkItem from "./NavLinkItem";
import { ICON_MAP } from "../constants/iconMap";

const BACKGROUND_MAP = {
  "walk-ins": "bg-walk-ins",
  pricing: "bg-pricing",
  "pick-up": "bg-pick-up",
};

let startX = 0;
let startY = 0;

function FAQCard({ data }) {
  const { id, question, answers, iconName, link } = data;
  const Icon = ICON_MAP[iconName];
  const bgClass = BACKGROUND_MAP[id];
  const buttonRef = useRef(null);

  function handleMouseDown(e) {
    startX = e.clientX;
    startY = e.clientY;
  }

  function handleMouseUp(e) {
    const diffX = Math.abs(e.clientX - startX);
    const diffY = Math.abs(e.clientY - startY);
    e.currentTarget.dataset.isDragging =
      diffX > 6 || diffY > 6 ? "true" : "false";
  }

  function handleCardClick(e) {
    if (e.target.tagName === "A" || e.target.closest("a")) return;

    if (
      e.target === buttonRef.current ||
      buttonRef.current?.contains(e.target)
    ) {
      return;
    }

    const selectedText = window.getSelection()?.toString();
    if (selectedText && selectedText.length > 0) return;

    buttonRef.current?.click();
  }

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
    <Disclosure className="group">
      <div
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onClick={(e) => {
          if (e.currentTarget.dataset.isDragging === "true") return;
          handleCardClick(e);
        }}
        className="flex w-full max-w-sm cursor-pointer flex-col rounded-2xl border-3 border-ink-base/15 bg-canvas-light shadow-lg transition-transform duration-300 ease-in-out hover:scale-103 has-focus-visible:border-brand-primary/70"
      >
        {/* Top - icon graphics */}
        <div
          className={`rounded-t-2xl ${bgClass} bg-size-[10rem] bg-right bg-repeat py-16`}
        >
          <Icon className="mx-auto size-18 drop-shadow-vector-dark" />
        </div>

        {/* Bottom - button (question), panel (answers), arrow icon */}
        <div className="flex flex-col p-6">
          <DisclosureButton
            ref={buttonRef}
            className="mb-4 cursor-pointer text-left indent-[0.35em_hanging] text-xl font-medium focus:outline-none"
          >
            "{question}"
          </DisclosureButton>

          <DisclosurePanel
            transition
            className="transition-[grid-template-rows, margin] mb-4 grid min-h-0 grid-rows-[1fr] overflow-hidden duration-300 ease-in-out data-closed:mb-0 data-closed:grid-rows-[0fr]"
          >
            <div className="flex flex-col gap-4 overflow-hidden">
              {answers.map((answer, i) => (
                <p key={i} className="text-left font-medium">
                  {parseAnswer(answer)}
                </p>
              ))}
            </div>
          </DisclosurePanel>

          <IoChevronDownCircle className="size-12 self-center fill-ink-base/35 transition duration-450 ease-in-out group-data-open:rotate-180" />
        </div>
      </div>
    </Disclosure>
  );
}

export default FAQCard;
