import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { colors } from 'styles/theme'
import { StyleSheet } from 'react-native'
import MyTabBar from 'components/general/Tab'
import { User } from 'types/users'
import Toast from 'react-native-toast-message'
import { AuthContext } from 'app/contexts'

interface Props {
  children: JSX.Element | JSX.Element[]
}

export default function AppLayout({ children }: Props) {
  const [user, setUser] = useState<null | User>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
      <MyTabBar />
      <Toast />
    </AuthContext.Provider>
  )
}