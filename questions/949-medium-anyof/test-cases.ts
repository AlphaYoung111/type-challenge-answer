import { Equal, Expect } from '@type-challenges/utils'

type Falsy<T> = T extends ('' | 0 | false | []) ?
  true: keyof T extends never ? true
    : false

type AnyOf<T extends readonly any[]> = T extends [infer First, ...infer Rest] ?
  Falsy<First> extends true ? AnyOf<Rest> : true
  : false

// type AnyOf<T extends readonly any[]> = T[number] extends infer Falsy | {}
//   ? Exclude<Falsy, 0 | '' | [] | false> extends never ? false : true
//   : false

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,

]
