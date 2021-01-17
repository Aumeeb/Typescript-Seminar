import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {Currency, ExtractSpecificValueFromArray, Item, Nature} from './types'

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>

abstract class Human<T = unknown> implements Item<T> {
  protected items: T[] = []
  public getItems(): T[] {
    return this.items
  }

  //first step1
  //base class for all human
  protected abstract cash: number // default cash for human character
  public abstract currency: Currency
}

class Vendor extends Human {
  constructor(public currency: Currency, protected cash: number = 100) {
    super()
  }
  public set pick(item: unknown) {
    this.items.push(item)
  }
}

const me = new Vendor('USD', 0)

me.pick = '1232'
me.pick = '12'
console.log(me.getItems())
