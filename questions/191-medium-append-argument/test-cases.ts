import { Equal, Expect } from '@type-challenges/utils'

type AppendArgument<T extends Function, Append> = T extends (...args: infer A) => infer R ? (...args: [...A, Append]) => R :never

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>
]
