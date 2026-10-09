import { ICON_MAP } from "../constants/iconMap";

function ConnectRow({ data }) {
  const { id, value, srValue, link, iconName } = data;

  const Icon = ICON_MAP[iconName];

  return (
    <address className="contents not-italic">
      <a
        href={link}
        className="flex w-fit max-w-full items-center gap-4 rounded-lg p-2 transition-[color] duration-300 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-0 focus-visible:outline-brand-secondary"
      >
        <Icon aria-hidden="true" className="text-xl" />
        <div>
          {id === "email" ? (
            <>
              {value.split("@")[0]}
              <wbr />@<wbr />
              {value.split("@")[1]}
            </>
          ) : (
            <>
              <span aria-hidden={!!srValue}>{value}</span>
              {srValue && <span className="sr-only">{srValue}</span>}
            </>
          )}
        </div>
      </a>
    </address>
  );
}

export default ConnectRow;
