export function debounce(delay: number): (...args: any[]) => void {
  return () => {
    // todo
    setTimeout(() => {
      console.log('I was called')
    }, delay)
  }
}

export function Events(type : 'X2'|"X4"|"X8"){

}