import { Animated, SafeAreaView, StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from '../../styles/theme'
import Step from './components/Step'
import ScreeOne from 'assets/onboarding/screen1.svg'
import ScreeTwo from 'assets/onboarding/screen2.svg'
import ScreenThree from 'assets/onboarding/screen3.svg'
import tw from 'settings/tailwind'
import Button from 'components/Inputs/Button'
import Stepper from 'components/common/Stepper'
import { Link, router } from 'expo-router'
import { AntDesign } from '@expo/vector-icons' 


const index = () => {
  const [step, setStep] = useState(0)
  const fadeAnim = new Animated.Value(0)

  const handlePanResponderEnd = () => {
    if(step === 2) {
      return  router.replace('/auth/SignUp')
    }
    setStep(step + 1)
  }

  const getStepToRender = () => {
    const mapComponent: Record<number, React.JSX.Element> = {
      0: <Step
        title='El marketplace mas seguro de compra y ventas de autos en Panama'
        image={ScreeOne}
      />,
      1: <Step
        title='Elije conductores de confianza y despreocúpate de problemas externos'
        image={ScreeTwo}
      />,
      2: <Step
        title='Disfruta de tus ganancias y de la seguridad que te brindamos '
        image={ScreenThree}
      />,
    }

    return mapComponent[step]
  }

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }
    ).start()
  }, [step])
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.background}>
        <View style={styles.topBackground}>
          <Link href='/auth/Login'>
            <AntDesign name='arrowleft' size={30} color='white' />
          </Link>
        </View>
        <View style={styles.bottomBackground}></View>
      </View>
      <Animated.View style={tw`flex-col items-center justify-center w-full h-240`} onResponderEnd={handlePanResponderEnd}>
        {getStepToRender()}
        <Stepper style={tw`my-12`} totalSteps={3} currentStep={step} />
        <Button
          text={step === 2 ? 'Empezar' : 'Siguiente'}
          color='primary'
          variant='filled'
          onPress={handlePanResponderEnd}
          style={tw`mb-6 w-full mx-auto`}
        />

      </Animated.View>
    
    </SafeAreaView>
  )
}

export default index

const styles = StyleSheet.create({
  safeArea: {
    height: '100%',
    width: '100%',
    flex: 0,
  },
  topBackground: {
    backgroundColor: colors.primary,
    height: '50%',
    display: 'flex',
    padding: 20,
  },
  bottomBackground: {
    backgroundColor: colors.white,
    height: '50%',
  },
  background: {
    height: '100%',
    width: '100%',
    flex: 1,
    position: 'absolute',
    lineHeight: 30,
  },
})
