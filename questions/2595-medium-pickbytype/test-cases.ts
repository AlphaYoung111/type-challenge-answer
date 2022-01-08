import { Equal, Expect } from '@type-challenges/utils'

interface Model {
  name: string
  count: number
  isReadonly: boolean
  isEnable: boolean
}

type PickByType<T, R> = {
  [k in keyof T as T[k] extends R ? k: never]: T[k]
}

type a <T, R> = {
  [K in keyof T]: T[K] extends R ?T[K]:never
}

type b = a<Model, boolean>

type cases = [
  Expect<Equal<PickByType<Model, boolean>, { isReadonly: boolean; isEnable: boolean }>>,
  Expect<Equal<PickByType<Model, string>, { name: string }>>,
  Expect<Equal<PickByType<Model, number>, { count: number }>>,
]
