import React, { useState } from 'react'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'
import { User } from 'types/users'
import { AuthContext } from './contexts'

export default function HomeLayout() {
  const [user, setUser] = useState<null | User>(null)

  return(
    <AuthContext.Provider value={{ user, setUser }}>
      <Slot />
      <Toast />
    </AuthContext.Provider>
    
  )
}