import { Equal, Expect, ExpectFalse, NotEqual } from '@type-challenges/utils'

interface User {
  name?: string
  age?: number
  address?: string
}

interface UserRequiredName {
  name: string
  age?: number
  address?: string
}

interface UserRequiredNameAndAge {
  name: string
  age: number
  address?: string
}

type RequiredByKeys<T, K = keyof T> = Omit<T & Required<Pick<T, K & keyof T>>, never>
// type Copy<T> = {
//   [Key in keyof T]: T[Key]
// }
// type RequiredByKeys<T, K = keyof T> = Copy<{
//   [P in keyof (Omit<T>, K extends keyof T ? K :never> & Required<Pick<T, keyof T & K>>)]: T[P]
// }>

// type a = RequiredByKeys<User, 'name'>

type cases = [
  Expect<Equal<RequiredByKeys<User, 'name'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'unknown'>, UserRequiredName>>,
  Expect<Equal<RequiredByKeys<User, 'name' | 'age'>, UserRequiredNameAndAge>>,
  Expect<Equal<RequiredByKeys<User>, Required<User>>>,
]
