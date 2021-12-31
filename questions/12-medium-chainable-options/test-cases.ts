import { Alike, Expect } from '@type-challenges/utils'

type Chainable<T = {}> = {
  option: <K extends string, V>(key: K, value: V) => Chainable<T & { [P in K]: V }>
  get: () => T
}

declare const a: Chainable

const result = a
  .option('foo', 123)
  .option('bar', { value: 'Hello World' })
  .option('name', 'type-challenges')
  .get()

type Expected = {
  foo: number
  bar: {
    value: string
  }
  name: string
}

type cases = [
  Expect<Alike<typeof result, Expected>>
]
