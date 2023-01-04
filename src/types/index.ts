export type ToggleCallback = (cb?: (s: boolean) => void) => void;

export type UseToggleReturns = [
  boolean,
  ToggleCallback,
  ToggleCallback,
  ToggleCallback
];
