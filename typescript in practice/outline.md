```typescript
//1. 首先我们来建立一个生态圈
const ecosystem = {
biCactus: '🌵🌵',
shamrock: '☘️',
whiteFlower: '🌸',
tulip: '🌷',
fish: '🐠',
Blowfish: '🐡',
rabbit: '🐰',
} as const
type ValueOf<T> = T[keyof T]
type Thing = ValueOf<typeof ecosystem>
type ExsitThing = Extract<Thing,"🐰"|"☘️">

type Allowed = ExsitThing | "💰"
//2. 那么生态圈里少人呢， 一定不会很精彩。所以作为一个造物主我需要创造一个人类
interface Items{
cash:number
bag:any[]
}
abstract class Human implements Items {
bag: any[] =[]
abstract cash:number = 100
}
abstract class Monster implements Items {
bag: any[] =[]
abstract cash:number = 10  
}

interface INotifiable{
notify(citizen:Items):void
}
class Government implements INotifiable{
notify(citizen: Items){
console.log(citizen.bag);
}
}
class FinanceDepartment implements INotifiable{
notify(citizen: Items): void {
console.log(citizen.bag.length);
}

}
//3.只有继承 Person 才可以得到原始资金，那么我先创建一个小贩
class Vendor<T extends Allowed> extends Human{
private gov
cash: number
constructor(gov:INotifiable){
super()
this.gov= gov
this.cash= this.cash \* 2
}
public set pick(thing: T){
this.bag.push(thing)
this.gov.notify(this)
}
}

const me = new Vendor(new FinanceDepartment)
me.pick="🐰"
me.pick="☘️"
me.pick="🐰"
me.pick="💰"
const you = new Vendor<"🐰">(new Government)
you.pick=

you
me

```