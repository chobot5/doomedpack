export const insertAt =
  <T>(index: number, value: T) =>
  (arr: T[]) => {
    return [...arr.slice(0, index), value, ...arr.slice(index)]
  }
