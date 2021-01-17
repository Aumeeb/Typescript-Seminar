import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {Currency, ExtractSpecificValueFromArray, Nature} from './types'

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>

abstract class Human {
  //first step1
  //base class for all human
  abstract cash: number // default cash for human character
  abstract currency: Currency
  protected items: unknown[] = [] // it can carry items
}

class Vendor extends Human {
  constructor(public currency: Currency, public cash: number = 100) {
    super()
  }
}

const me = new Vendor('USD', 0)
