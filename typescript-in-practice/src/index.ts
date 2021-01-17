import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {Currency, ExtractSpecificValueFromArray, Item, Nature} from './types'

console.clear()

type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>
type Alive = Extract<Ecosystem, '🐰' | '🐡'>
type Legal = Alive | Treasure
interface INotifyable {
  notify(citizen: Human): void
}

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

class Vendor<T = Alive> extends Human {
  private gov: INotifyable
  constructor(protected currency: Currency, protected cash: number = 100, gov: INotifyable) {
    super()
    this.gov = gov
  }
  public set pick(item: T) {
    this.items.push(item)
    this.gov.notify(this)
  }
}

class Government implements INotifyable {
  notify(citizen: Vendor) {
    console.log('🪴', citizen.getItems())
  }
}
class FinanceDepartment implements INotifyable {
  notify(citizen: Vendor) {
    console.log('🏵️', citizen.length)
  }
}
const me = new Vendor<Legal>('USD', 0, new FinanceDepartment())
const you = new Vendor<'🐰'>('RMB', 0, new FinanceDepartment())

me.pick = me.pick = '🐰'
me.pick = '💎'
console.log()
you.pick = '🐰'
