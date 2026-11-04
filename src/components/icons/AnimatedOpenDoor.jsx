import { useRef } from "react";
import { motion } from "motion/react";
import { useGroupDisclosure } from "@/hooks/useGroupDisclosure";

// Original icon by Font Awesome v7.3.1 | Modified by me (See README.md)
function AnimatedOpenDoor(props) {
  const ref = useRef(null);
  const isOpen = useGroupDisclosure(ref);

  const DOOR_PATHS = {
    closed:
      "M14.4 4.8H16.8V20.4C16.8 21.0638 17.3362 21.6 18 21.6H19.2C19.8637 21.6 20.4 21.0638 20.4 20.4C20.4 19.7363 19.8637 19.2 19.2 19.2V4.8C19.2 3.47625 18.1237 2.4 16.8 2.4H13.2H7.2C5.87625 2.4 4.8 3.47625 4.8 4.8V19.2C4.13625 19.2 3.6 19.7363 3.6 20.4C3.6 21.0638 4.13625 21.6 4.8 21.6H13.2C13.8637 21.6 14.4 21.0638 14.4 20.4V4.8ZM9.6 12C9.6 11.3363 10.1362 10.8 10.8 10.8C11.4637 10.8 12 11.3363 12 12C12 12.6638 11.4637 13.2 10.8 13.2C10.1362 13.2 9.6 12.6638 9.6 12Z",
    open: "M11.4 4.8H16.8V20.4C16.8 21.0638 17.3362 21.6 18 21.6H19.2C19.8637 21.6 20.4 21.0638 20.4 20.4C20.4 19.7363 19.8637 19.2 19.2 19.2V4.8C19.2 3.47625 18.1237 2.4 16.8 2.4H13.2H7.2C5.87625 2.4 4.8 3.47625 4.8 4.8V19.2C4.13625 19.2 3.6 19.7363 3.6 20.4C3.6 21.0638 4.13625 21.6 4.8 21.6H10.2C10.8637 21.6 11.4 21.0638 11.4 20.4V4.8ZM6.6 12C6.6 11.3363 7.13625 10.8 7.8 10.8C8.46375 10.8 9 11.3363 9 12C9 12.6638 8.46375 13.2 7.8 13.2C7.13625 13.2 6.6 12.6638 6.6 12Z",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <motion.path
        animate={{ d: isOpen ? DOOR_PATHS.open : DOOR_PATHS.closed }}
        transition={{ type: "spring", stiffness: 260, damping: 20, mass: 0.8 }}
        className="fill-purple-300 stroke-purple-700"
      />
    </svg>
  );
}

export default AnimatedOpenDoor;
