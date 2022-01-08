import { Equal, Expect } from '@type-challenges/utils'

type DigitToArray = {
  '0': []
  '1': [unknown]
  '2': [unknown, unknown]
  '3': [unknown, unknown, unknown]
  '4': [unknown, unknown, unknown, unknown]
  '5': [unknown, unknown, unknown, unknown, unknown]
  '6': [unknown, unknown, unknown, unknown, unknown, unknown]
  '7': [unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  '8': [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
  '9': [unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown, unknown]
}
type CreateArrayByLength<N extends string, R extends unknown[] = []> = N extends `${infer First}${infer Rest}`
  ? First extends keyof DigitToArray
    ? CreateArrayByLength<Rest, [...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...R, ...DigitToArray[First]]>
    : never
  : R
type MinusOne<T extends number> = CreateArrayByLength<`${T}`> extends [infer First, ...infer Rest]
  ? Rest['length']
  : never

// type MinusOne<T extends number, K extends number[] = []> = T extends K['length']
//   ? K extends [number, ...infer R]
//     ? R['length']
//     : never
//   : MinusOne<T, [ ...K, 0]>

type cases = [
  Expect<Equal<MinusOne<1>, 0>>,
  Expect<Equal<MinusOne<55>, 54>>,
  Expect<Equal<MinusOne<3>, 2>>,
  Expect<Equal<MinusOne<100>, 99>>,
  Expect<Equal<MinusOne<1101>, 1100>>,
]
