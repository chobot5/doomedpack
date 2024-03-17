import { NonNullable } from '../types'
import { exists } from '../predicates'

export const isEmpty = <T>(arr: NonNullable<T[]>) => exists(arr) && arr.length === 0
