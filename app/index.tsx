import React, {  useContext } from 'react'
import { router } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import { serviceClient } from 'http/index'
import { User } from 'types/users'
import { ErrorResponse } from 'http/http'
import { AuthContext } from './_layout'
import useToast from './hooks/useToast'

SplashScreen.preventAutoHideAsync()



export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
  })
  const { setUser } = useContext(AuthContext)
  const [, errorToast] = useToast()
  

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }

    let user = await serviceClient.getMe().catch(() => {
      return router.replace('/auth/Login')
    })

    if(!user || (user as ErrorResponse).message) {
      serviceClient.logout()
      errorToast('Session expirada, inicia sesión nuevamente')
      return router.replace('/auth/Login')
    }
    user = user as User
    setUser(user as User)
    if(!user.verified) {
      return router.replace({
        pathname: '/auth/Verification',
        params: { phone: user.phone }
      })
    }
    router.replace('/Onboarding')
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView}>
    </View>
  )
}
