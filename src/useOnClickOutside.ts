import React, { useEffect } from "react";

/**
 * Hook implements logic for
 * clicking outside the element
 * @param {React.RefObject<HTMLElement>[]} refs - references to be listened
 * @param handler - function of action if click outside the element ocurred
 */
const useOnClickOutside = (
  refs: React.RefObject<HTMLElement>[],
  handler: () => void
) => {
  useEffect(() => {
    const listener = (e: MouseEvent | TouchEvent) => {
      for (const ref of refs) {
        if (!ref.current || ref.current.contains(e.target as HTMLElement)) {
          return;
        }
      }

      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [refs, handler]);
};

export default useOnClickOutside;
