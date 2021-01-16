import ecosystem from './server/ecosystem'
import treasure from './server/treasure'
import {Nature} from './types'

type ExractSpecificValueFromArray<
  T extends readonly P[],
  P extends object,
  K extends keyof P
> = T[number][K] extends infer R ? (R extends {} ? R : 'lack of properties') : '1'

type Ecosystem = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'quantity'>
type Ecosystem1 = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'price'>
type Ecosystem2 = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'symbol'>
// type Treasure = ExractSpecificValueFromArray<typeof treasure, Nature, 'symbol'>

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T

type T0 = Unpacked<string> // string
type T1 = Unpacked<string[]> // string
type T2 = Unpacked<() => string> // string
type T3 = Unpacked<Promise<string>> // string
type T4 = Unpacked<Promise<string>[]> // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>> // string
