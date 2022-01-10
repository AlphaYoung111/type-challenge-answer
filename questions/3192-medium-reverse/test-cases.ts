import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [...infer Rest, infer Last] ? Reverse<Rest, [...R, Last]> : R

type cases = [
  Expect<Equal<Reverse<['a', 'b']>, ['b', 'a']>>,
  Expect<Equal<Reverse<['a', 'b', 'c']>, ['c', 'b', 'a']>>
]
