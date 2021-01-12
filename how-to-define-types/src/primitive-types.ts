const unique: unique symbol = Symbol.for('global_a')
let n: number = 1
let hugeNumber: bigint = 9999999n
let undefinedd: undefined = undefined
let nul: null = null
let s1: string = '1'
let nil: null | undefined = undefined ?? null

let genericArray: readonly [1, 2] = [1, 2] // read only type

let numberArray: any[] = []
numberArray.push(1)

const fn: () => void = () => void 0

const o: {} = {}
