import { createContext } from 'react'
import { User } from 'types/users'

export const AuthContext = createContext({
  user: null as null | User,
  setUser: (user: User) => {}
})