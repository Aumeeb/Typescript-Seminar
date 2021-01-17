import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import type {Currency, ExtractSpecificValueFromArray, Item, Nature} from './types'

console.clear()
//#region  types
type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>
type Alive = Extract<Ecosystem, '🐰' | '🐡'>
type Legal = Alive | Treasure
interface INotifyable {
  notify(citizen: Human): void
}
//#endregion
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

class Vendor<T = Alive> extends Human<T> {
  protected gov: INotifyable
  constructor(protected currency: Currency, protected cash: number = 100, gov: INotifyable) {
    super()
    this.gov = gov
  }
  public set pick(item: T) {
    this.items.push(item)
    this.gov.notify(this)
  }
}
const superVendor = <T extends new (...args: any[]) => Vendor<S>, S>(Base: T) =>
  class extends Base {
    constructor(...arg: any[]) {
      super(...arg)
    }
    set pick(item: S) {
      for (let i = 0; i < 15; i++) this.items.push(item)
      this.gov.notify(this)
    }
  }

//#region  gov
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
//#endregion
const me = new Vendor<Legal>('USD', 0, new FinanceDepartment())
const you = new Vendor<'🐰'>('RMB', 0, new FinanceDepartment())

const superman = new (superVendor(Vendor))<'💰'>('RMB', 200, new FinanceDepartment())

me.pick = me.pick = '🐰'
me.pick = '💎'

you.pick = '🐰'
you.pick = '🐰'

superman.pick = '💰'
console.log(superman.getItems())
