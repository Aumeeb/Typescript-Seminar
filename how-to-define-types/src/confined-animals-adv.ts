// const ecosystem = {
//   //1. 首先这是一个原生态圈
//   cactus: '🌵',
//   biCactus: '🌵🌵',
//   sheafOfRice: '🌾 ',
//   shamrock: '☘️ ',
//   whiteFlower: '🌸',
//   tulip: '🌷',
//   hamster: '🐹',
//   bear: '🐻',
// } as const
// type Thing  = typeof ecosystem[keyof typeof ecosystem]  //3 抽取值类型
// type Flower  = Extract<Thing, "🌷">   //4 可用类型
// // type Flower  = Extract<Thing, "🌷">   //5 可用政府只允许你采郁金香
// //2、 我是一个小贩需要采药为生
// interface Certification{
//     cert:string
// }
// interface INotifable{
//     nofity(person: Vendor) :void 
// }
// class Government implements INotifable{
//   nofity(person: Vendor){
//      console.log(person.cert + person.bag + '\t');
//   }
// }
// class FinanceDepartment implements INotifable{
//   nofity(person: Vendor){
//       console.log(  person.bag.length + '\t');
//   }
// }
// class Vendor implements Certification {
//   private gov : INotifable ;
//   constructor(cert:string, gov:INotifable, public bag: Flower[] = []) {
//       this.cert=cert
//       this.gov =gov
//   }
//     cert: string;
  
//   set pick(herb: Flower) {
//     //采药
//     this.bag.push(herb)
//    this.gov.nofity(this)
//   }
//   drop() {
//     this.bag = []
//   }
   
// }

// let me = new Vendor('1',new FinanceDepartment())

// me.pick = '🌷'
// me.pick = '🌷'

// let mary = new Vendor('2', new Government())

// mary.pick = '🌷'





// // type AnimalObject = typeof PickHerbs extends (...args: any) => infer R ? R : never
// // type AnimalUnion = AnimalObject[keyof AnimalObject]
