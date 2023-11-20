import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { colors } from 'styles/theme'

interface Props {
  totalSteps: number;
  currentStep: number;
  style?: StyleProp<ViewStyle>
}

const Stepper = ({ totalSteps, currentStep, style }: Props) => {
  const renderSteps = () => {
    return Array.from({ length: totalSteps }).map((_, i) => (
      <View key={i} style={i === currentStep ? styles.activeStep : styles.step} />
    ))
  }
  return (
    <View style={[styles.container, style]}>
      {renderSteps()}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  step: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: colors.primaryDisabled,
    margin: 5,
  },
  activeStep: {
    width: 10,
    height: 10,
    borderRadius: 7.5,
    backgroundColor: colors.primary,
    margin: 5,
  }
})

export default Stepper
