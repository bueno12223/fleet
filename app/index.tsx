import React, {  useContext } from 'react'
import { router } from 'expo-router'
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { View } from 'react-native'
import { serviceClient } from 'http/index'
import { User } from 'types/users'
import { ErrorResponse } from 'http/http'
import useToast from './hooks/useToast'
import { AuthContext } from './contexts'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Montserrat-Light': require('../assets/fonts/Montserrat-Light.ttf'),
    'Montserrat-Regular': require('../assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('../assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-SemiBold': require('../assets/fonts/Montserrat-SemiBold.ttf'),
    'Montserrat-Bold': require('../assets/fonts/Montserrat-Bold.ttf'),
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
    router.replace({
      pathname: '/Home/Dashboard',
      params: {
        showRegisterCarModal: false
      }
    })
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <View onLayout={onLayoutRootView}>
    </View>
  )
}
