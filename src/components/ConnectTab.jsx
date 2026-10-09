import { ICON_MAP } from "../constants/iconMap";
import ContactTabLayout from "./ContactTabLayout";

function ConnectTab({ data }) {
  const { id, title, value, srValue, link, iconName } = data;

  const Icon = ICON_MAP[iconName];

  return (
    <address className="contents not-italic">
      <ContactTabLayout as="a" href={link} icon={Icon} title={title}>
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
      </ContactTabLayout>
    </address>
  );
}

export default ConnectTab;
