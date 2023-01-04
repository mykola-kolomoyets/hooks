import { useRef, useEffect, useMemo } from "react";

/**
 * Hook implements scroll to the
 * anchor on any page of application
 * - Works for all browsers
 * - Ignores layout shift
 * @param {string} id - id of block (without #)
 * @returns ref object to be passed to DOM item
 * you want to be scrolled when link
 * includes {id} anchor
 */
const useAnchoredScroll = (id: string) => {
  const ref = useRef<HTMLDivElement>(null);

  const isPathWithAnchor = useMemo(
    () => window.location.pathname.includes(`#${id}`),
    [id]
  );

  useEffect(() => {
    isPathWithAnchor && ref.current?.scrollIntoView();
  }, [isPathWithAnchor]);

  return ref;
};

export default useAnchoredScroll;
