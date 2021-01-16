import ecosystem from './server/ecosystem'
import treasure from './server/treasure'
import {Nature} from './types'

// type ExractSpecificValueFromArray<
//   T extends readonly P[],
//   P extends object,
//   K extends keyof P
// > =   T[number][K] extends infer V ? V  extends unknown ? never : V

type ExractSpecificValueFromArray<T extends readonly P[], P extends object, K extends keyof P> = T[number][K]

type Ecosystem = ExractSpecificValueFromArray<typeof ecosystem, Nature, 'symbol'>
// type Treasure = ExractSpecificValueFromArray<typeof treasure, Nature, 'symbol'>
