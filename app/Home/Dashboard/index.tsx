import { View } from 'react-native'
import React, { useState } from 'react'
import { useAuth } from 'app/hooks/useAuth'
import { useLocalSearchParams } from 'expo-router'
import Text from 'components/general/Text'
import Card from 'components/common/Card'

const index = () => {
  const { onLogout, user } = useAuth()
  const { showRegisterCarModal } = useLocalSearchParams()
  const [registerCarModal, setRegisterCarModal] = useState(Boolean(showRegisterCarModal))
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text weight='semiBold' color='primary'>Bienvenido {user?.name}!</Text>
      <Card text='Fleet activos'>
        <Text variant='title2' weight='bold' color='primary'>0</Text>
      </Card>
    </View>
  )
}

export default index