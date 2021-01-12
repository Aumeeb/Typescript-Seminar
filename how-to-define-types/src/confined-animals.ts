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
type Thing  = typeof ecosystem[keyof typeof ecosystem]  //3 抽取值类型
type Flower  = Extract<Thing, "🌷">   //4 可用类型
// type Flower  = Extract<Thing, "🌷">   //5 可用政府只允许你采郁金香
//2、 我是一个小贩需要采药为生
class Government{
  nofity(person: Vendor){
     console.log(person.bag);
  }
}
class Vendor {
  private gov = new Government()
  constructor(public bag: Flower[] = []) {
     
  }
  
  set pick(herb: Flower) {
    //采药
    this.bag.push(herb)
   this.gov.nofity(this)
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

me.pick = '🌷'

let mary = new Vendor()

me.pick = '🌷'


console.log(me)


// type AnimalObject = typeof PickHerbs extends (...args: any) => infer R ? R : never
// type AnimalUnion = AnimalObject[keyof AnimalObject]
