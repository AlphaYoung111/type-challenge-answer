import { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  a: number
  b: string
}
type Bar = {
  b: number
  c: boolean
}

// type Merge<T, P> = {
//   [K in keyof T | keyof P]: K extends keyof P ? P[K]:T[K]
// }

type Merge<T, P> = {
  [K in keyof T | keyof P]:
  K extends keyof P ? P[K]
    : K extends keyof T ? T[K]
      : never
}
type cases = [
  Expect<Equal<Merge<Foo, Bar>, {
    a: number
    b: number
    c: boolean
  }>>
]
