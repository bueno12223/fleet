import React, { useState } from 'react'
import { Text, View } from 'react-native'
import AppLoading from 'expo-app-loading'
import * as Font from 'expo-font'

const fetchFonts = () => {
  return Font.loadAsync({
    'Montserrat-Regular': require('./assets/fonts/Montserrat-VariableFont_wght.ttf'),
    'Montserrat-Italic': require('./assets/fonts/Montserrat-Italic-VariableFont_wght.ttf'),
  })
}

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
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontFamily: 'Montserrat-Regular' }}>Hello, world!</Text>
      <Text style={{ fontFamily: 'Montserrat-Italic' }}>Hello, world!</Text>
    </View>
  )
}
