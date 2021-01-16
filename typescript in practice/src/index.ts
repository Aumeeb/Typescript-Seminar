import ecosystem from './server/ecosystem'
import treasure from './server/treasure'
import {Nature} from './types'

type ExractSpecificValueFromArray<
  T extends readonly P[],
  P extends object,
  K extends keyof P
> = T[number][K] extends infer R ? (R extends number | string ? R[] : 'Lack of properties') : never

type Ecosystem = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'quantity'>
type Ecosystem1 = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'price'>
type Ecosystem2 = ExractSpecificValueFromArray<typeof ecosystem, Nature & {quantity?: number}, 'symbol'>
type Treasure = ExractSpecificValueFromArray<typeof treasure, Nature, 'symbol'>
