import { Maybe } from '../types'
import { exists } from '../predicates'

export const isEmptyOrNull = <T>(arr: Maybe<T[]>) => !exists(arr) || arr.length === 0
