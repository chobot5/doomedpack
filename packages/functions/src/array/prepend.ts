export const prepend =
  <T>(value: T) =>
  (arr: T[]) =>
    [value, ...arr]
