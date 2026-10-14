import { useState, useEffect } from "react";

/*
 * A custom hook that monitors a parent container with the ".group" class
 * and returns true if it currently has a "data-open" attribute.
 */

export function useGroupDisclosure(ref) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const parentDisclosure = ref.current?.closest(".group");
    if (!parentDisclosure) return;

    const observer = new MutationObserver(() => {
      setIsOpen(parentDisclosure.hasAttribute("data-open"));
    });

    observer.observe(parentDisclosure, { attributes: true });
    return () => observer.disconnect();
  }, [ref]);

  return isOpen;
}
