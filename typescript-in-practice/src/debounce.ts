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

export function Events<T extends Human>(type: BounsRate): Function {
  return (target: T, name: string) => {
    console.log(target, name)

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
    target['cash'] *= scale
  }
}
