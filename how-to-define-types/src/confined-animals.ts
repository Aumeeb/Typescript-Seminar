const buildZoo = () =>
  ({
    dog: '🐶',
    fox: '🦊',
    lion: '🦁',
    unicorn: '🦄',
  } as const)

type AnimalKeys = typeof buildZoo extends (...args: any) => infer R ? R : never
type AnimalUnion = AnimalKeys[keyof AnimalKeys]

// `
// 🐶 Dog Face
// 🐩 Poodle
// 🐺 Wolf
// 🦊 Fox
// 🦝 Raccoon
// 🐱 Cat Face
// 🐈 Cat
// 🦁 Lion
// 🐯 Tiger Face
// 🐅 Tiger
// 🐆 Leopard
// 🐴 Horse Face
// 🐎 Horse
// 🦄 Unicorn
// 🦓 Zebra
// 🦌 Deer
// 🐮 Cow Face
// 🐂 Ox
// 🐃 Water Buffalo
// 🐄 Cow
// 🐷 Pig Face
// 🐖 Pig
// 🐗 Boar
// 🐽 Pig Nose
// 🐏 Ram
// 🐑 Ewe
// 🐐 Goat
// 🐪 Camel
// 🐫 Two-Hump Camel
// 🦙 Llama
// 🦒 Giraffe
// 🐘 Elephant
// 🦏 Rhinoceros
// 🦛 Hippopotamus
// 🐭 Mouse Face
// 🐁 Mouse
// 🐀 Rat
// 🐹 Hamster
// 🐰 Rabbit Face
// 🐇 Rabbit
// 🐿️ Chipmunk
// `
