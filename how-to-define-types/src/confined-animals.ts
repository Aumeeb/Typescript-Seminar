const ecosystem = {
    //1. 首先这是一个原生态圈
    cactus: '🌵',
    biCactus: '🌵🌵',
    sheafOfRice: '🌾 ',
    shamrock: '☘️ ',
    whiteFlower: '🌸',
    tulip: '🌷',
    hamster: '🐹',
    bear: '🐻',
  } as const
  
  //2、 我是一个小贩需要采药为生
  class Vendor {
    constructor(public bag: any[] = []) {}
    pickHerbs(herb: any) {
      //采药
      this.bag.push(herb)
    }
    drop() {
      this.bag = []
    }
    info() {
      //打印
      console.log(this.bag)
    }
  }
  
  let me = new Vendor()  
  me.pickHerbs('2323')
  me.pickHerbs('111')
  me.pickHerbs('🌲')
 
  console.log(me)
  me.drop()
  console.log(me);
  
  // type AnimalObject = typeof PickHerbs extends (...args: any) => infer R ? R : never
  // type AnimalUnion = AnimalObject[keyof AnimalObject]
  