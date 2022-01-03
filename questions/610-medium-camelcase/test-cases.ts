import { Equal, Expect } from '@type-challenges/utils'

// type CamelCase<S extends String> = S extends `${infer First}-${infer Right}`
//   ? Capitalize<Right> extends Right
//     ? `${First}-${CamelCase<Capitalize<Right>>}`
//     : `${First}${CamelCase<Capitalize<Right>>}`
//   : S

type CamelCase<T extends string> = T extends `${infer First}-${infer A}${infer Rest}`?
  A extends Uppercase<A> ? `${First}-${CamelCase<`${A}${Rest}`>}`:`${First}${CamelCase<`${Uppercase<A>}${Rest}`>}`
  :T

type cases = [
  Expect<Equal<CamelCase<'foo-bar-baz'>, 'fooBarBaz'>>,
  Expect<Equal<CamelCase<'foo-Bar-Baz'>, 'foo-Bar-Baz'>>,
  Expect<Equal<CamelCase<'foo-Bar-baz'>, 'foo-BarBaz'>>,
  Expect<Equal<CamelCase<'foo-bar'>, 'fooBar'>>,
  Expect<Equal<CamelCase<'foo_bar'>, 'foo_bar'>>,
  Expect<Equal<CamelCase<'foo--bar----baz'>, 'foo-Bar---Baz'>>,
  Expect<Equal<CamelCase<'a-b-c'>, 'aBC'>>,
  Expect<Equal<CamelCase<'a-b-c-'>, 'aBC-'>>,
  Expect<Equal<CamelCase<'ABC'>, 'ABC'>>,
  Expect<Equal<CamelCase<'-'>, '-'>>,
  Expect<Equal<CamelCase<''>, ''>>,
  Expect<Equal<CamelCase<'😎'>, '😎'>>,
]
