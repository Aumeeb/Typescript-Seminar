import {Human} from '.'
import {Arbitrary, BonusRate} from './types'

export function debounce(delay: number): (...args: any[]) => void {
  return () => {
    // todo
    setTimeout(() => {
      console.log('I was called')
    }, delay)
  }
}
export function throttle(delay: number = 1000): (...args: any[]) => void {
  return (a, b, c) => {
    console.log(a, b, c)

    // todo
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
        return weakMap.get(this) ?? 0
      },
    })
  }
}
