import { useRef } from "react";
import { motion } from "motion/react";
import { useGroupDisclosure } from "@/hooks/useGroupDisclosure";

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
function AnimatedPiggyBank(props) {
  const ref = useRef(null);
  const isOpen = useGroupDisclosure(ref);

  const wobbleKeyframes = [0, -5, 5, -3, 2, 0];
  const wobbleTransition = {
    duration: 0.5,
    ease: "easeOut",
    times: [0, 0.22, 0.44, 0.66, 0.88, 1],
  };

  const pigVariants = {
    closed: {
      rotate: wobbleKeyframes,
      transition: wobbleTransition,
    },
    open: {
      rotate: wobbleKeyframes,
      transition: wobbleTransition,
    },
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
      style={{ overflow: "visible" }}
    >
      {/* Coin */}
      <motion.path
        d="M12.625 4.5C10.8308 4.5 9.375 5.95583 9.375 7.75C9.375 9.54417 10.8308 11 12.625 11C14.4192 11 15.875 9.54417 15.875 7.75C15.875 5.95583 14.4192 4.5 12.625 4.5Z"
        className="fill-clay-tan-100 stroke-clay-tan-150"
        animate={{ y: isOpen ? -5 : 1 }}
        transition={{
          type: "spring",
          stiffness: 360,
          damping: 15,
        }}
      />

      {/* Piggy Bank */}
      <motion.path
        d="M7.3125 10.75C8.10817 10.75 8.75 11.3918 8.75 12.1875C8.75 12.9832 8.10817 13.625 7.3125 13.625C6.51683 13.625 5.875 12.9832 5.875 12.1875C5.875 11.3918 6.51683 10.75 7.3125 10.75ZM17.75 18.2305C17.75 18.0318 17.8677 17.8521 18.0498 17.7725C20.0814 16.8843 21.5 14.8567 21.5 12.5C21.5 10.1274 19.9862 7.98321 17.5938 6.7041C16.4822 8.24385 14.6712 9.25 12.625 9.25C10.3039 9.25 8.28496 7.95422 7.24805 6.05176C6.72863 5.70428 6.10791 5.5 5.4375 5.5H4.67578C4.5979 5.5 4.53594 5.57418 4.55566 5.65625L5.22363 8.32422C5.26132 8.47528 5.22598 8.63511 5.12891 8.75684C4.76581 9.21162 4.46582 9.69485 4.24316 10.2012C4.16334 10.3827 3.98347 10.5 3.78516 10.5H2.9375C2.69411 10.5 2.5 10.6941 2.5 10.9375V15.3125C2.5 15.5559 2.69411 15.75 2.9375 15.75H4.5C4.61783 15.75 4.73051 15.7915 4.81934 15.8652L4.90039 15.9502C5.49384 16.7414 6.28413 17.3741 7.19922 17.7725C7.38167 17.8519 7.5 18.0315 7.5 18.2305V19.375C7.5 19.7903 7.83474 20.125 8.25 20.125H9.53906C9.83094 20.125 10.0933 19.9553 10.2178 19.6953L10.2627 19.5791L10.5391 18.6123C10.5929 18.4246 10.7496 18.288 10.9375 18.2568L11.0195 18.25H14.2344C14.4295 18.25 14.6038 18.3633 14.6855 18.5352L14.7148 18.6123L14.9922 19.5811V19.582C15.0837 19.9032 15.3768 20.125 15.7109 20.125H17C17.4153 20.125 17.75 19.7903 17.75 19.375V18.2305Z"
        strokeLinejoin="round"
        className="fill-raspberry-200 stroke-raspberry-300"
        variants={pigVariants}
        animate={isOpen ? "open" : "closed"}
        style={{ originX: "55%", originY: "90%" }}
      />
    </svg>
  );
}

export default AnimatedPiggyBank;
