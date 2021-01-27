import ecosystem from './data/ecosystem'
import treasure from './data/treasure'
import {events, throttle} from './debounce'
import type {Currency, ExtractSpecificValueFromArray, Item, Nature} from './types'

console.clear()
//#region  types
type Ecosystem = ExtractSpecificValueFromArray<typeof ecosystem, Nature>
type Treasure = ExtractSpecificValueFromArray<typeof treasure, Nature>
type Alive = Extract<Ecosystem, '🐰' | '🐡'>
type Legal = Alive | Treasure

interface INotifiable {
  notify(citizen: Human): void
}
//#endregion
export abstract class Human<T = unknown, C = unknown> implements Item<T> {
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
  protected abstract currency: C
}

export class Vendor<T = Alive, C extends Currency | string = Currency> extends Human<T, C> {
  *[Symbol.iterator]() {
    for (let i = 0; i < this.length; i++) yield this.items[i]
  }
  protected gov: INotifiable

  @events('x1.5')
  protected cash: number
  constructor(protected currency: C, cash: number = 100, gov: INotifiable) {
    super()
    this.gov = gov
    this.cash = ~~cash
  }
  @throttle()
  public set pick(item: T) {
    console.log('vendor', item)

    this.items.push(item)
    this.gov.notify(this)
  }
}
const superVendor = <T extends new (...args: any[]) => Vendor<S>, S>(Base: T) =>
  class extends Base {
    constructor(...arg: any[]) {
      super(...arg)
    }

    cleanUp(): void {
      this.items = []
    }
    public set pick(item: S) {
      for (let i = 0; i < 15; i++) this.items.push(item)
      this.gov.notify(this)
    }
  }

//#region  gov
class Government implements INotifiable {
  public static readonly INSTANCE = new Government()
  notify(citizen: Vendor) {
    console.log('🍁', ...citizen)
  }
  private constructor() {}
}
class FinanceDepartment implements INotifiable {
  notify(citizen: Vendor) {
    console.log('🏵️', citizen.length)
  }
}
//#endregion

const me = new Vendor<Legal, '$'>('$', 100.121, Government.INSTANCE)
const you = new Vendor<'🐰'>('RMB', 100, new FinanceDepartment())

const superman = new (superVendor<typeof Vendor, Legal>(Vendor))<Legal>('RMB', 1000, new FinanceDepartment())

me.pick = '👑'
me.pick = '👑'
me.pick = '👑'
me.pick = '🐰'
me.pick = '💎'
console.log('~~~', me)

// you.pick = '🐰'
// you.pick = '🐰'

// superman.pick = '💰'
// superman.pick = '👑'

// console.log(me['cash'], 'me')
// console.log(superman['cash'], 'superman')
// console.log(you['cash'])
