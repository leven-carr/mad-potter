// Line Diamond Horizontal Rule svg by SVGBackgrounds.com (See README.md)
function HorizontalRule({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 100"
      className={className}
      {...props}
    >
      <path d="M990 45H535l-35-35-35 35H10v10h455l35 35 35-35h455V45z"></path>
    </svg>
  );
}

export default HorizontalRule;
