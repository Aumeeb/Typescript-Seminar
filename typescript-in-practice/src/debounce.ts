import {Human, Vendor} from '.'
import {BounsRate} from './types'

export function debounce(delay: number): (...args: any[]) => void {
  return () => {
    // todo
    setTimeout(() => {
      console.log('I was called')
    }, delay)
  }
}

export function events<T extends Human>(type: BounsRate): Function {
  var weakMap = new Map<{}, number>()
  return (target: T, key: string) => {
    let scale = 0
    if (type === 'x1.5') {
      scale = 1.5
    }
    if (type === 'x2') {
      scale = 2
    }
    if (type === 'x16') {
      scale = 16
    }
    Reflect.defineProperty(target, key, {
      set(value) {
        weakMap.set(this, value * scale)
      },
      get() {
        return weakMap.get(this) || 0
      },
    })
  }
}
