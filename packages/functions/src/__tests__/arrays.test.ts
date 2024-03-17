import { describe, expect, it } from 'vitest'

import { insertAt, isEmpty, isEmptyOrNull, isNotEmpty, removeAt, updateAt } from '../array'

describe('Test isEmpty', () => {
  it('Should check if filled array is empty', () => {
    expect(isEmpty([1, 2, 3])).toEqual(false)
  })

  it('Should check if non filled array is empty', () => {
    expect(isEmpty([])).toEqual(true)
  })
})

describe('Test isEmptyOrNull', () => {
  it('Should check if filled array is empty', () => {
    expect(isEmptyOrNull(undefined)).toEqual(true)
  })

  it('Should check if non filled array is empty', () => {
    expect(isEmptyOrNull([])).toEqual(true)
  })

  it('Should check if filled array is empty', () => {
    expect(isEmptyOrNull([1, 2])).toEqual(false)
  })
})

describe('Test inNonEmpty', () => {
  it('Should check if filled array is not empty', () => {
    expect(isNotEmpty(undefined)).toEqual(false)
  })

  it('Should check if non filled array is not empty', () => {
    expect(isNotEmpty([])).toEqual(false)
  })

  it('Should check if filled array is not empty', () => {
    expect(isNotEmpty([1, 2, 3])).toEqual(true)
  })
})

describe('Test updateAt', () => {
  it('Should check return updated array', () => {
    expect(updateAt(2, 666)([1, 2, 3, 4, 5])).toEqual([1, 2, 666, 4, 5])
  })

  it('Should return same array with non existing index', () => {
    expect(updateAt(666, 666)([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })
})

describe('Test removedAt', () => {
  it('Should check return array without removed item', () => {
    expect(removeAt(2)([1, 2, 3, 4, 5])).toEqual([1, 2, 4, 5])
  })
})

describe('Test insertAt', () => {
  it('Should check return updated array without removed item', () => {
    expect(insertAt(2, 666)([1, 2, 3, 4, 5])).toEqual([1, 2, 666, 3, 4, 5])
  })
})
