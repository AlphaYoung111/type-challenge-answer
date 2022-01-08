import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}

type Mutable<T> = {
  -readonly [K in keyof T]: T[K] extends Record<PropertyKey, any> ? Mutable<T[K]>:T[K]
}

type cases = [
  Expect<Equal<Mutable<Readonly<Todo1>>, Todo1>>,
]
