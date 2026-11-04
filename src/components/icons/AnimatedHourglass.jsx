import { useRef } from "react";
import { motion } from "motion/react";
import { useGroupDisclosure } from "@/hooks/useGroupDisclosure";

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
function AnimatedHourglass(props) {
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
      xmlns="http://www.w3.org/2000/svg"
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

export default AnimatedHourglass;
