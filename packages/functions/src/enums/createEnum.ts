/*
    const typedEnum = createEnum({ a: 1, b: "test", c: 3 })
*/
export function createEnum<const T extends Record<string, number | string>>(names: T) {
  return names
}

/*
    type EnumType = EnumType<typeof typedEnum>
*/
export type EnumType<A> = A[keyof A]
