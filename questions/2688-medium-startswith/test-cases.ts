import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type StartsWith<T extends string, S extends string> = T extends `${S}${infer R}`?true:false

type cases = [
  Expect<Equal<StartsWith<'abc', 'ac'>, false>>,
  Expect<Equal<StartsWith<'abc', 'ab'>, true>>,
  Expect<Equal<StartsWith<'abc', 'abcd'>, false>>,
]
