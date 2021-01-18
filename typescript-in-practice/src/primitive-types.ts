const unique: unique symbol = Symbol.for('global_a')

let n: number = 9999999999999999999999999999999999999999999999999999999999
 
//-9007199254740991 (-(253-1)) and 9007199254740991 (253-1)
let hugeNumber: bigint = 999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999_999_999n
let undefinedd: undefined = undefined
let nul: null = null
let s1: string = '1'
let nil: null | undefined = undefined ?? null

let genericArray: readonly [1, 2] = [1, 2] // read only type
let genericArray2:   [1, 2] = [1, 2] // read only type

 

let numberArray: any[] = [1,'numbe',1n]
// numberArray.push(1)

const fn: () => void = () => void 0

const o: {}= {}
let yourName:String = new String(1)
let yourValue :string = '1'

console.log(yourName === yourValue);
