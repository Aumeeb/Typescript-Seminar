export type Nature = {symbol: string; price: number}
export type ExtractSpecificValueFromArray<
  T extends readonly P[],
  P extends object,
  K extends keyof P
> = T[number][K] extends infer R ? (R extends number | string ? R : 'Lack of properties') : never
