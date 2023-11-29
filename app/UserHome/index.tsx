import { Text, SafeAreaView } from 'react-native'
import React from 'react'
import { useAuth } from 'app/hooks/useAuth'
import Button from 'components/Inputs/Button'

const index = () => {
  const { onLogout } = useAuth()
  return (
    <SafeAreaView>
      <Text>Home :)</Text>
      <Button onPress={onLogout} text='Cerrar sesión' />
    </SafeAreaView>
  )
}

export default index