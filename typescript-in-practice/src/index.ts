import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {Currency, ExtractSpecificValueFromArray, Item, Nature} from './types'

console.clear()

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>

abstract class Human<T = unknown> implements Item<T> {
  get length() {
    return this.items.length
  }
  protected items: T[] = []
  public getItems(): T[] {
    return this.items
  }

  //first step1
  //base class for all human
  protected abstract cash: number // default cash for human character
  protected abstract currency: Currency
}

class Vendor extends Human {
  gov = new FinanceDepartment()
  constructor(protected currency: Currency, protected cash: number = 100) {
    super()
  }
  public set pick(item: unknown) {
    this.items.push(item)
    this.gov.notify(this)
  }
}

class Government {
  notify(citizen: Vendor) {
    console.log('🪴', citizen.getItems())
  }
}
class FinanceDepartment {
  notify(citizen: Vendor) {
    console.log('🏵️', citizen.length)
  }
}
const me = new Vendor('USD', 0)

me.pick = '1232'
me.pick = '12'
me.pick = 'boolean'
me.pick = 'boolean'
// console.log(me.getItems())
