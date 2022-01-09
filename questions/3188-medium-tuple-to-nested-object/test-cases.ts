import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type TupleToNestedObject<T extends unknown[], U> = T extends [infer First, ...infer Rest]
  ? Record<First & string, TupleToNestedObject<Rest, U>>
  : U

type cases = [
  Expect<Equal<TupleToNestedObject<['a'], string>, { a: string }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b'], number>, { a: { b: number } }>>,
  Expect<Equal<TupleToNestedObject<['a', 'b', 'c'], boolean>, { a: { b: { c: boolean } } }>>,
  Expect<Equal<TupleToNestedObject<[], boolean>, boolean>>,
]
