import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {ExtractSpecificValueFromArray, Nature} from './types'

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature, 'symbol'>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature, 'symbol'>
