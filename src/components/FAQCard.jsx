import reactStringReplace from "react-string-replace";
import NavLinkItem from "./NavLinkItem";
import { ICON_MAP } from "../constants/iconMap";

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
    <article className="flex max-w-xl flex-col justify-center gap-3 rounded-2xl border-2 border-ink-base/15 bg-canvas/80 p-6 shadow-md backdrop-blur-sm">
      <h3 className="text-center text-xl font-medium">"{question}"</h3>

      <Icon className="self-center" />

      {answers.map((answer, i) => (
        <p key={i} className="text-medium font-medium">
          {parseAnswer(answer)}
        </p>
      ))}
    </article>
  );
}

export default FAQCard;
