function BunnyMail({ className }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* BUNNY */}
      <g className="animate-bunny-hop">
        {/* Left ear */}
        <path
          d="M18.0383 17.3095L21.7386 15.0482C21.5988 12.9716 18.6842 -0.209029 14.5435 1.6857C10.0895 3.72378 16.5415 15.2909 18.0383 17.3095Z"
          fill="#F0DCFE"
          stroke="#4D0076"
        />
        {/* Left inner ear */}
        <path
          d="M16.6819 7.56102C15.0373 8.17775 16.6216 13.0245 18.7377 16.4008L20.7935 14.9618C20.0477 11.1156 18.3265 6.94429 16.6819 7.56102Z"
          fill="#E30B5D"
          stroke="#4D0076"
          strokeWidth="0.5"
        />
        {/* Right ear */}
        <path
          d="M29.9617 17.3102L26.2614 15.0488C26.4012 12.9722 29.3158 -0.208373 33.4565 1.68635C37.9105 3.72443 31.4585 15.2916 29.9617 17.3102Z"
          fill="#F0DCFE"
          stroke="#4D0076"
        />
        {/* Right inner ear */}
        <path
          d="M31.3115 7.66103C32.9561 8.27776 31.3719 13.1245 29.2558 16.5008L27.2 15.0618C27.9457 11.2156 29.6669 7.0443 31.3115 7.66103Z"
          fill="#E30B5D"
          stroke="#4D0076"
          strokeWidth="0.5"
        />
        {/* Face */}
        <path
          d="M18.0383 17.3095C16.578 18.8457 15.7769 22.5 15.7769 22.5H24H32.2231C32.2231 22.5 31.4221 18.8457 29.9617 17.3095C28.7949 16.0821 27.9036 15.4621 26.2614 15.0482C25.4015 14.8315 24 14.8426 24 14.8426C24 14.8426 22.5985 14.8315 21.7387 15.0482C20.0965 15.4621 19.2051 16.0821 18.0383 17.3095Z"
          fill="#F0DCFE"
          stroke="#4D0076"
        />
        {/* EYES */}
        <g className="origin-center animate-bunny-blink">
          {/* Left eye */}
          <ellipse
            cx="21.18"
            cy="21.825"
            rx="0.82"
            ry="1.025"
            fill="#2B2127"
            // className="origin-bottom animate-bunny-blink"
          />
          {/* Right eye */}
          <ellipse
            cx="26.82"
            cy="21.825"
            rx="0.82"
            ry="1.025"
            fill="#2B2127"
            // className="origin-bottom animate-bunny-blink"
          />
        </g>
      </g>

      {/* ENVELOPE */}
      <g>
        {/* Envelope rectangle */}
        <path
          d="M36 23H12C10.3431 23 9 24.3431 9 26V44C9 45.6569 10.3431 47 12 47H36C37.6569 47 39 45.6569 39 44V26C39 24.3431 37.6569 23 36 23Z"
          fill="#F0DCFE"
          stroke="#4D0076"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Envelope v */}
        <path
          d="M39 27.5L25.5135 36.0905C25.0558 36.3563 24.536 36.4963 24.0068 36.4963C23.4775 36.4963 22.9577 36.3563 22.5 36.0905L9 27.5"
          stroke="#4D0076"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default BunnyMail;
