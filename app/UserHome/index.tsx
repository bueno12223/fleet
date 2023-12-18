import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from 'app/hooks/useAuth'
import Button from 'components/Inputs/Button'
import { useLocalSearchParams } from 'expo-router'

const index = () => {
  const { onLogout } = useAuth()
  const { showRegisterCarModal } = useLocalSearchParams()
  const [registerCarModal, setRegisterCarModal] = useState(Boolean(showRegisterCarModal))
  return (
    <View>
      <Button onPress={onLogout} text='Cerrar sesión' />

      <Text>Home  )</Text>
    </View>
  )
}

export default index