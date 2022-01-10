import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

type Reverse<T extends unknown[], R extends unknown[] = []> = T extends [...infer Rest, infer Last] ? Reverse<Rest, [...R, Last]> : R

type FlipArguments<T extends Function> = T extends (...arg: infer P) => infer R ?
  (...arg: Reverse<P>) => R
  : T

type cases = [
  Expect<Equal<FlipArguments<() => boolean>, () => boolean>>,
  Expect<Equal<FlipArguments<(foo: string) => number>, (foo: string) => number>>,
  Expect<Equal<FlipArguments<(arg0: string, arg1: number, arg2: boolean) => void>, (arg0: boolean, arg1: number, arg2: string) => void>>
]
