import { useRef, useEffect, useMemo } from "react";

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
