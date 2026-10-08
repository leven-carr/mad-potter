function HoursRow({ data }) {
  const { displayDays, srDays, displayHours, srHours } = data;

  return (
    <div className="flex flex-wrap gap-4 gap-y-0">
      <span aria-hidden="true">{displayDays}:</span>
      <span aria-hidden="true">{displayHours}</span>
      <span className="sr-only">
        {srDays}: {srHours}
      </span>
    </div>
  );
}

export default HoursRow;
