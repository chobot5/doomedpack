import { describe, expect, it } from 'vitest'
import { exists } from '../predicates'

describe('Test exists', () => {
  it('Should return true with non-nullable value', () => {
    expect(exists(666)).toEqual(true)
  })

  it('Should return true with "0" value', () => {
    expect(exists(0)).toEqual(true)
  })

  it('Should return true with empty string value', () => {
    expect(exists('')).toEqual(true)
  })

  it('Should return true with empty array value', () => {
    expect(exists([])).toEqual(true)
  })

  it('Should return false with null value', () => {
    expect(exists(null)).toEqual(false)
  })

  it('Should return false with undefined value', () => {
    expect(exists(undefined)).toEqual(false)
  })
})
