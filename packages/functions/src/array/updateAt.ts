import { exists } from '../predicates'

export const updateAt =
  <T>(index: number, value: T) =>
  (arr: T[]) => {
    if (!exists(arr[index])) {
      return arr
    }

    return [...arr.slice(0, index), value, ...arr.slice(index + 1)]
  }
