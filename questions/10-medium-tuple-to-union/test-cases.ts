import { Equal, Expect } from '@type-challenges/utils'

type TupleToUnion<T extends any[]> = T extends [infer First, ...infer Rest] ? First | TupleToUnion<Rest> : never

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]
