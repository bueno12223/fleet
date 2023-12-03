import Text from 'components/general/Text'
import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import tw from 'settings/tailwind'
import ScreeOne from 'assets/onboarding/screen1.svg'
import ScreenThree from 'assets/onboarding/screen3.svg'
import { colors } from 'styles/theme'
import Button from 'components/Inputs/Button'
import { router } from 'expo-router'
import OnboardingLayout from 'components/layouts/OnboardingLayout'

const RegistroComponent = () => {
  const [selected, setSelected] = useState<number | null>(1)

  const handlePress = () => {
    if (selected === 0) {
      return router.replace('/Onboarding/Driver')
    }
    router.replace('/Onboarding/Owner')
  }
  
  return (
    <OnboardingLayout>
      <View style={styles.containerTop}>
        <TouchableOpacity 
          style={[styles.button, selected === 0 ? styles.selected : {}]} 
          onPress={() => setSelected(0)}
        >
          <ScreeOne />
          <Text color={selected === 0 ? 'white' : 'primary'} style={tw`text-center`}>Registrarse como Conductor</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerBottom}>
        <TouchableOpacity 
          style={[styles.button, selected === 1 ? styles.selected : {}]} 
          onPress={() => setSelected(1)}
        >
          <ScreenThree />
          <Text color={selected === 1 ? 'white' : 'primary'} style={tw`text-center`}>Registrarse como Propietario</Text>
        </TouchableOpacity>
      </View>
      <Button onPress={handlePress} style={tw`m-auto mb-4`} text='Siguiente' color='primary' variant='filled' />
    </OnboardingLayout>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerTop: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '45%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  selected: {
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  containerBottom: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '45%',
  },
  button: {
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
})

export default RegistroComponent
