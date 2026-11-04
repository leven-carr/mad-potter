import { ICON_MAP } from "@/constants/iconMap";
import InfoTabLayout from "./InfoTabLayout";

function ConnectTab({ data }) {
  const { id, title, value, srValue, link, iconName } = data;
  const Icon = ICON_MAP[iconName];
  const opensNewTab = id === "address";

  return (
    <address className="contents not-italic">
      <InfoTabLayout
        as="a"
        href={link}
        target={opensNewTab ? "_blank" : undefined}
        rel={opensNewTab ? "noopener noreferrer" : undefined}
        icon={Icon}
        title={title}
      >
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
      </InfoTabLayout>
    </address>
  );
}

export default ConnectTab;
