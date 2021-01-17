import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {ExtractSpecificValueFromArray, Nature} from './types'

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>

abstract class Human {   //first step1
  //base class for all human
  abstract cash = 100 // default cash for human character
  items: unknown[] = [] // it can carry items
}
