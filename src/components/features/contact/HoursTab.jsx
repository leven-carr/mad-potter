import { LuAlarmClock } from "react-icons/lu";
import { businessInfo } from "@/constants/businessInfo";
import InfoTabLayout from "./InfoTabLayout";
import HoursRow from "@/components/common/HoursRow";

function HoursTab() {
  const { hours } = businessInfo;

  return (
    <InfoTabLayout icon={LuAlarmClock} title="Hours">
      <div className="flex max-w-xl flex-col gap-1.5">
        {hours.map((days, index) => (
          <HoursRow key={index} data={days} />
        ))}
      </div>
    </InfoTabLayout>
  );
}

export default HoursTab;
