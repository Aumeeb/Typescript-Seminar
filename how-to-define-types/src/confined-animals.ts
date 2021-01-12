const buildZoo = () =>
  ({
    dog: '🐶',
    fox: '🦊',
    lion: '🦁',
    unicorn: '🦄',
  } as const)

// At the begining Iwan
class Market {}
type AnimalObject = typeof buildZoo extends (...args: any) => infer R ? R : never
type AnimalUnion = AnimalObject[keyof AnimalObject]
