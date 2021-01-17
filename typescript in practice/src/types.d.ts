export type Nature = {symbol: string; price: number}
export type ExtractSpecificValueFromArray<
  T extends readonly P[],
  P extends object,
  K extends keyof P = 'symbol'
> = T[number][K] extends infer R ? (R extends number | string ? R : 'Lack of properties') : never
export type Currency = 'USD' | 'RMB'


//$ ¥