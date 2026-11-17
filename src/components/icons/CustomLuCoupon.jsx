function CustomLuCoupon({ className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="m16.891 7.205-3.412-3.412a1.74 1.74 0 0 0-1.233-.511H5.994A1.744 1.744 0 0 0 4.25 5.025v6.253c0 .462.184.906.51 1.233l7.589 7.588a2.115 2.115 0 0 0 2.982 0l1.56-1.56"
      />
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.7"
        d="M9.045 8.513a.436.436 0 1 0 0-.872.436.436 0 0 0 0 .872"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.4"
        d="M19.07 9.602v6.539M20.887 10.329h-2.725a1.271 1.271 0 0 0 0 2.542h1.817a1.271 1.271 0 1 1 0 2.543H16.89"
      />
    </svg>
  );
}

export default CustomLuCoupon;
