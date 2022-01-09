import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface Model {
  name: string
  age: number
  locations: string[] | null
}

type ModelEntries = ['name', string] | ['age', number] | ['locations', string[] | null]

type ObjectEntries<T, R extends keyof T = keyof T> = R extends keyof T ? [R, Required<T>[R]]: never

type cases = [
  Expect<Equal<ObjectEntries<Model>, ModelEntries>>,
  Expect<Equal<ObjectEntries<Partial<Model>>, ModelEntries>>,
]
