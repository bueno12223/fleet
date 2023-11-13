import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import * as Font from 'expo-font'
const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
  })
}

// component
import Login from './pages/auth/Login'
import AppLoading from 'expo-app-loading'
import SignUpScreen from './pages/auth/SignUp'
import Home from './pages/Home'

const Stack = createNativeStackNavigator()

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    )
  }

  return (
    <NavigationContainer>
	  <Stack.Navigator>
        <Stack.Screen name='Login'  options={{ headerShown: false }} component={Login} />
        <Stack.Screen name='SignUp' options={{ headerShown: false }} component={SignUpScreen} />
        <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}  />
	  </Stack.Navigator>


    </NavigationContainer>
  )
}
