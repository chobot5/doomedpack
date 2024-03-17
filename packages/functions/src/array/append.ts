export const append =
  <T>(value: T) =>
  (arr: T[]) =>
    [...arr, value]
