import { useEffect, useState, useRef, useCallback } from "react";
import { UseToggleReturns } from "./types";

/**
 * Hook implements toggle logic
 * Can be used for select menus, switcher components etc.
 * @param {boolean} initialState
 * @returns array of {boolean} current state, 3 {ToggleCallback} callbacks:
 * - toggle
 * - close
 * - open
 */
const useToggle = (initialState = false): UseToggleReturns => {
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
