const ecosystem = {
  cactus: '🌵',
  sheafOfRice: '🌾 ',
  shamrock: '☘️ ',
  whiteFlower: '🌸',
  tulip: '🌷',

  bug: '🐛 ',
  hamster: '🐹',
  bear: '🐻',
} as const

// At the begining Iwan
class Vendor {
  constructor(public bag: any[]) {}
  pickHerbs(herb: any) {
    //采药
    this.bag.push(herb)
  }
  info() {
    //打印
    console.log(this.bag)
  }
}

let me = new Vendor([])
me.pickHerbs('waa')
me.pickHerbs('🌲')

console.log(me)

// type AnimalObject = typeof PickHerbs extends (...args: any) => infer R ? R : never
// type AnimalUnion = AnimalObject[keyof AnimalObject]
