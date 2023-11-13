import { StyleSheet } from 'react-native'

// Colors
export type AvailableColors = 'primary' | 'secondary' | 'white' | 'neutral' | 'black' | 'background' | 'disabled'

export const colors: Record<AvailableColors, string> = {
  primary: '#216869',
  secondary: '#F4F1DE',
  white: '#FFFFFF',
  background: '#F4F1DE',
  neutral: '#4F4F4F',
  black: '#4A4A4A',
  disabled: '#BDBDBD',
}


export const colorsStyles = StyleSheet.create({
  primary: {
    color: colors.primary,
  },
  secondary: {
    color: colors.secondary,
  },
  white: {
    color: colors.white,
  },
  background: {
    backgroundColor: colors.background,
  },
  neutral: {
    color: colors.neutral,
  },
  black: {
    color: colors.black,
  },
})
