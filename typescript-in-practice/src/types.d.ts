import bonus from './data/bonus'
export type Nature = {symbol: string; price: number}
export type Arbitrary<T> = (...args: any[]) => T
export type ExtractSpecificValueFromArray<
  T extends readonly P[],
  P extends object,
  K extends keyof P = 'symbol'
> = T[number][K] extends infer R ? (R extends number | string ? R : 'Lack of properties') : never
export type Currency = 'USD' | 'RMB'
type Credentials = number | string

interface Item<T = unknown> {
  getItems(): T[]
  length: number
}
type BonusRate = `x${typeof bonus[number]}`
