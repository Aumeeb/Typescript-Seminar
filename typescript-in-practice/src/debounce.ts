import {Human, Vendor} from '.'
import {Arbitrary, BonusRate} from './types'

export function debounce(delay: number): (...args: any[]) => void {
  return () => {
    // todo
    setTimeout(() => {
      console.log('I was called')
    }, delay)
  }
}
export function moderate<T extends Vendor>(delay: number = 1000): (...args: any[]) => void {
  // todo
  let last = 0
  return (target: T, key: string, descriptor: PropertyDescriptor) => {
    descriptor.set = function (value) {
      const now = new Date().getTime()
      if (now - last < delay) return
      last = now
      let vendor: T = this as T
      vendor['items'].push(value)
      vendor['gov'].notify(vendor)
    }
  }
}

/** Game Events which increases the Human cash by bonus rate. */
export function events<T extends Human>(type: BonusRate): Arbitrary<void> {
  var weakMap = new Map<{}, number>()
  return (target: T, key: string) => {
    let scale: number
    if (type === 'x1.5') scale = 1.5
    if (type === 'x2') scale = 2
    if (type === 'x16') scale = 16

    Reflect.defineProperty(target, key, {
      set(value) {
        weakMap.set(this, ~~(scale * value))
      },
      get() {
        return weakMap.get(this) || 0
      },
    })
  }
}

export function load(val: number) {
  return (target: any, key: string, index: number) => {
    target.prototype.cashes = val
    console.log(target.prototype, `the class has been instantiated`)
    console.log(target.cash)
  }
}
