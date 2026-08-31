import reactStringReplace from "react-string-replace";
import NavLinkItem from "./NavLinkItem";
import { ICON_MAP } from "../constants/iconMap";
import { IoChevronDownCircle } from "react-icons/io5";

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
    <article className="flex max-w-xl flex-col justify-center gap-4 divide-y-2 divide-ink-base/15 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-[10px]">
      <div className="flex flex-col gap-4 pb-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <IoChevronDownCircle className="size-10 shrink-0 text-ink-base/25" />
          <h3 className="indent-[0.35em_hanging] text-xl font-medium">
            "{question}"
          </h3>
        </div>
        <Icon className="size-16 self-center" />
      </div>

      <div className="flex flex-col gap-4">
        {answers.map((answer, i) => (
          <p key={i} className="text-medium font-medium">
            {parseAnswer(answer)}
          </p>
        ))}
      </div>
    </article>
  );
}

export default FAQCard;
