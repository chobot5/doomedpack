export const removeAt =
  (index: number) =>
  <T>(arr: T[]) => {
    return [...arr.slice(0, index), ...arr.slice(index + 1)]
  }
