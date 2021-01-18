import {Human} from '.'
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
  return (target: T, key: string) => {
    let scale = 0
    let localValue: number = 0
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
        localValue = value * scale
      },
      get() {
        return localValue
      },
    })
  }
}
