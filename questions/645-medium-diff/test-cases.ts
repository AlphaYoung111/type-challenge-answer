import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}

// type Diff<T extends Record<string, any>, P extends Record<string, any>> = {
//   [K in Exclude<keyof T, keyof P> | Exclude<keyof P, keyof T>]: K extends keyof T ? T[K] :
//     K extends keyof P ? P[K] : never
// }

type Diff<T extends Record<string, any>, P extends Record<string, any>, O = Pick<T, Exclude<keyof T, keyof P>> & Pick<P, Exclude<keyof P, keyof T>>> = {
  [K in keyof O ]: O[K]
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>
]
