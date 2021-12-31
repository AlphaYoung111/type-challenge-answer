import { Equal, Expect } from '@type-challenges/utils'

type If<B, T, F> = B extends true ? T : F

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>,
]

// // @ts-expect-error
// type error = If<null, 'a', 'b'>
