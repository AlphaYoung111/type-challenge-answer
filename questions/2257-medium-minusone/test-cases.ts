import { Equal, Expect } from '@type-challenges/utils'

// type Result<T> = {
//   '0':'9'
//   '9':'8'
//   '8':'7'
//   '7':'6'
//   '6':'5'
//   '5':'4'
//   '4':'3'
//   '3':'2'
//   '2':'1'
//   '1':'0'
// }

// type MinusOne<T extends number> = `${T}` extends `${infer First}${infer L}` ?

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]
