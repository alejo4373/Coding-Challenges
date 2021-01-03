const getChange = require('./getChange');

describe("Vending machine returns correct change", () => {
  it('Handles average case', () => {
    expect(getChange(5, 0.99)).toEqual([1, 0, 0, 0, 0, 4])
    expect(getChange(2, 1.83)).toEqual([2, 1, 1, 0, 0, 0])
    expect(getChange(10, 1)).toEqual([0, 0, 0, 0, 0, 9])
    expect(getChange(10, 1.25)).toEqual([0, 0, 0, 1, 1, 8])
  })

  it('Returns single coin change', () => {
    expect(getChange(2.00, 1.00)).toEqual([0, 0, 0, 0, 0, 1])
    expect(getChange(5.50, 5.00)).toEqual([0, 0, 0, 0, 1, 0])
    expect(getChange(2.75, 2.50)).toEqual([0, 0, 0, 1, 0, 0])
    expect(getChange(2.00, 1.90)).toEqual([0, 0, 1, 0, 0, 0])
    expect(getChange(0.25, 0.20)).toEqual([0, 1, 0, 0, 0, 0])
    expect(getChange(1.00, 0.99)).toEqual([1, 0, 0, 0, 0, 0])
  })

  it('Returns no change for exact purchase', () => {
    expect(getChange(1.00, 1.00)).toEqual([0, 0, 0, 0, 0, 0])
    expect(getChange(0.75, 0.75)).toEqual([0, 0, 0, 0, 0, 0])
    expect(getChange(3.99, 3.99)).toEqual([0, 0, 0, 0, 0, 0])
    expect(getChange(0.00, 0.00)).toEqual([0, 0, 0, 0, 0, 0])
  })

  it('Returns one of each coin for given cases cases', () => {
    expect(getChange(2, 0.09)).toEqual([1, 1, 1, 1, 1, 1])
    expect(getChange(3.95, 2.04)).toEqual([1, 1, 1, 1, 1, 1])
  })
})
