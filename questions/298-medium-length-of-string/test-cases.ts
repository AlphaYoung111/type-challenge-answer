import { Equal, Expect } from '@type-challenges/utils'

type LengthOfString<T extends string, A extends string[] = []> = T extends `${infer First}${infer Rest}` ? LengthOfString<Rest, [...A, First]> : A['length']

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]
