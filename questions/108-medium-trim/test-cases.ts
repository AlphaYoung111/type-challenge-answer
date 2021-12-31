import { Equal, Expect } from '@type-challenges/utils'

type SpaceStr = ' ' | '\n' | '\t'

type Trim<T extends string> = T extends `${SpaceStr}${infer Rest}` ? Trim<Rest> : T extends `${infer Rest}${SpaceStr}` ? Trim<Rest> : T

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
]
