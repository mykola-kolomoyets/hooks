import { useEffect, useState, useRef, useCallback } from "react";

const useToggle = (
  initialState = false
): [
  boolean,
  (cb?: (s: boolean) => void) => void,
  (cb?: (s: boolean) => void) => void,
  (cb?: (s: boolean) => void) => void
] => {
  const [state, setState] = useState<boolean>(initialState);
  const cbRef = useRef<(s: boolean) => void>();

  const toggle = useCallback((cb?: (s: boolean) => void): void => {
    cbRef.current = cb;
    setState((state) => !state);
  }, []);

  const close = useCallback((cb?: (s: boolean) => void): void => {
    cbRef.current = cb;
    setState(false);
  }, []);

  const open = useCallback((cb?: (s: boolean) => void): void => {
    cbRef.current = cb;
    setState(true);
  }, []);

  useEffect(() => {
    if (typeof cbRef.current === "function") {
      cbRef.current(state);
      cbRef.current = undefined;
    }
  }, [state]);

  return [state, toggle, close, open];
};

export default useToggle;
