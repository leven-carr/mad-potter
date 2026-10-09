import { LuAlarmClock } from "react-icons/lu";
import { businessInfo } from "../constants/businessInfo";
import ContactTabLayout from "./ContactTabLayout";
import HoursRow from "./HoursRow";

function HoursTab() {
  const { hours } = businessInfo;

  return (
    <ContactTabLayout icon={LuAlarmClock} title="Hours">
      <div className="flex max-w-xl flex-col gap-1.5">
        {hours.map((days, index) => (
          <HoursRow key={index} data={days} />
        ))}
      </div>
    </ContactTabLayout>
  );
}

export default HoursTab;
