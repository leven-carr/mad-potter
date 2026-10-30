import { useRef } from "react";
import { motion } from "motion/react";
import { useGroupDisclosure } from "../../hooks/useGroupDisclosure";

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
export function CustomOpenDoor(props) {
  const ref = useRef(null);
  const isOpen = useGroupDisclosure(ref);

  const DOOR_PATHS = {
    closed:
      "M14.4 4.8H16.8V20.4C16.8 21.0638 17.3362 21.6 18 21.6H19.2C19.8637 21.6 20.4 21.0638 20.4 20.4C20.4 19.7363 19.8637 19.2 19.2 19.2V4.8C19.2 3.47625 18.1237 2.4 16.8 2.4H13.2H7.2C5.87625 2.4 4.8 3.47625 4.8 4.8V19.2C4.13625 19.2 3.6 19.7363 3.6 20.4C3.6 21.0638 4.13625 21.6 4.8 21.6H13.2C13.8637 21.6 14.4 21.0638 14.4 20.4V4.8ZM9.6 12C9.6 11.3363 10.1362 10.8 10.8 10.8C11.4637 10.8 12 11.3363 12 12C12 12.6638 11.4637 13.2 10.8 13.2C10.1362 13.2 9.6 12.6638 9.6 12Z",
    open: "M11.4 4.8H16.8V20.4C16.8 21.0638 17.3362 21.6 18 21.6H19.2C19.8637 21.6 20.4 21.0638 20.4 20.4C20.4 19.7363 19.8637 19.2 19.2 19.2V4.8C19.2 3.47625 18.1237 2.4 16.8 2.4H13.2H7.2C5.87625 2.4 4.8 3.47625 4.8 4.8V19.2C4.13625 19.2 3.6 19.7363 3.6 20.4C3.6 21.0638 4.13625 21.6 4.8 21.6H10.2C10.8637 21.6 11.4 21.0638 11.4 20.4V4.8ZM6.6 12C6.6 11.3363 7.13625 10.8 7.8 10.8C8.46375 10.8 9 11.3363 9 12C9 12.6638 8.46375 13.2 7.8 13.2C7.13625 13.2 6.6 12.6638 6.6 12Z",
  };

  return (
    <svg ref={ref} viewBox="0 0 24 24" fill="none" {...props}>
      <motion.path
        animate={{ d: isOpen ? DOOR_PATHS.open : DOOR_PATHS.closed }}
        transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.8 }}
        className="fill-purple-300 stroke-purple-700"
      />
    </svg>
  );
}

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
export function CustomPiggyBank(props) {
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

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
export function CustomHourglass(props) {
  const ref = useRef(null);
  const isOpen = useGroupDisclosure(ref);

  const hourglassVariants = {
    closed: {
      rotate: 0,
    },
    open: {
      rotate: 180,
    },
  };

  return (
    <svg
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://w3.org"
      {...props}
    >
      <motion.path
        d="M9.42622 2.275C8.85855 2.12289 8.27704 2.45863 8.12493 3.0263C7.97282 3.59397 8.30856 4.17548 8.87623 4.32759L8.7817 4.68038C8.41733 6.04022 8.60959 7.49077 9.31393 8.71073L10.9081 11.4719L8.14692 13.0661C6.92696 13.7704 6.03519 14.9305 5.67082 16.2904L5.57629 16.6431C5.00862 16.491 4.4271 16.8268 4.275 17.3944C4.12289 17.9621 4.45863 18.5436 5.0263 18.6957L15.2893 21.4457C15.8569 21.5978 16.4384 21.2621 16.5906 20.6944C16.7427 20.1267 16.4069 19.5452 15.8392 19.3931L15.9338 19.0403C16.2981 17.6805 16.1059 16.2299 15.4015 15.0099L13.8074 12.2488L16.5686 10.6546C17.7885 9.95026 18.6803 8.79017 19.0447 7.43033L19.1392 7.07754C19.7069 7.22965 20.2884 6.89391 20.4405 6.32624C20.5926 5.75857 20.2569 5.17705 19.6892 5.02495L9.42622 2.275ZM13.8812 18.4903L13.7867 18.8431L7.62888 17.1931L7.72341 16.8403C7.94255 16.0225 8.47616 15.3268 9.20813 14.9042L11.9693 13.31L13.5635 16.0712C13.9861 16.8031 14.1003 17.6725 13.8812 18.4903Z"
        className="fill-clay-tan-100 stroke-[#7a3f93]"
        variants={hourglassVariants}
        animate={isOpen ? "open" : "closed"}
        transition={{
          type: "spring",
          stiffness: 160,
          damping: 16,
          mass: 0.8,
        }}
        style={{ originX: "50%", originY: "50%" }}
      />
    </svg>
  );
}
