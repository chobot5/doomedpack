import { describe, expect, it } from 'vitest'
import { range } from '../number'

describe('Test Range', () => {
  it('Should return range by described from-to ', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
  })
})
