export const objectEntries = <T extends {}>(obj: T) => Object.entries(obj) as [keyof T, T[keyof T]][]
