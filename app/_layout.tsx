import React, { createContext, useState } from 'react'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { User } from 'types/users'


export const AuthContext = createContext({
  user: null as null | User,
  setUser: (user: User) => {},
})

export default function HomeLayout() {
  const [user, setUser] = useState<null | User>(null)

  return(
    <AuthContext.Provider value={{ user, setUser }}>
      <Slot />
      <Toast />
    </AuthContext.Provider>
    
  )
}