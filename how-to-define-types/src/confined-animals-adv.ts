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
// type Credentiall = number | string
// type Thing = typeof ecosystem[keyof typeof ecosystem] //3 抽取值类型
// type Flower = Extract<Thing, '🌷' | '🌸'> //4 可用类型
// type AllowedBusiness = Flower | '💰'
// // type Flower  = Extract<Thing, "🌷">   //5 可用政府只允许你采郁金香

// //2、 我是一个小贩需要采药为生
// interface Certification<A> {
//   cert: A
// }

// interface INotifiable {
//   nofity(person: Vendor): void
// }
// class Government implements INotifiable {
//   nofity(person: Vendor) {
//     console.log(`${person.cert} ${person.bag}`)
//   }
// }
// class FinanceDepartment implements INotifiable {
//   nofity(person: Vendor) {
//     console.log(person.bag.length + '\t')
//   }
// }
// class Vendor<C extends Credentiall = Credentiall, AB extends AllowedBusiness = AllowedBusiness>
//   implements Certification<C> {
//   constructor(public cert: C, protected gov: INotifiable, public bag: AB[] = []) {
//     this.cert = cert
//     this.gov = gov
//   }

//   public set pick(herb: AB) {
//     //采药
//     this.bag.push(herb)
//     this.gov.nofity(this)
//   }

//   drop() {
//     this.bag = []
//   }
// }
// interface Ability {
//   cleanUp(): void
// }
// function debounce(delay: number): Function {
//   return () => {
//     // todo
//     setTimeout(() => {
//       console.log('I was called')
//     }, delay)
//   }
// }
// const superVendor = <T extends new (...args: any[]) => Vendor>(Base: T) => {
//   class SuperVendor extends Base {
//     constructor(...arg: any[]) {
//       super(...arg)
//     }
//     @debounce(2000)
//     cleanUp(): void {}
//     set pick(herb: any) {
//       for (let i = 0; i < 15; i++) {
//         this.bag.push(herb)
//       }
//       this.gov.nofity(this)
//     }
//   }
//   return SuperVendor
// }
// const SuperVendor = superVendor(Vendor)
// const mine = new Vendor<string, '💰'>('10100', new Government())
// let sVen = new SuperVendor<string, '💰'>('10100', new Government())

// sVen.pick = '💰'
// sVen.cleanUp()

// //   let mine = new Vendor<number, '💰'>(100, new FinanceDepartment())

// //   mine.pick = '💰'
// //   mine.pick = '💰'
// //   mine.pick = '💰'

// //   let mary = new Vendor<string, Flower>('100', new Government())

// //   mary.pick = '🌷'
// //   mary.pick = '🌸'

// // type AnimalObject = typeof PickHerbs extends (...args: any) => infer R ? R : never
// // type AnimalUnion = AnimalObject[keyof AnimalObject]
