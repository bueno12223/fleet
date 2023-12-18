import { StyleSheet } from 'react-native'

// Colors
export type AvailableColors = 'primary' | 'secondary' | 'white' | 'neutral' | 'black' | 'background' | 'disabled'

export const colors = {
  primary: '#216869',
  primaryDisabled: '#B2D8D8',
  secondary: '#F4F1DE',
  white: '#FFFFFF',
  background: '#F6F9FF',
  neutral: '#4F4F4F',
  black: '#4A4A4A',
  disabled: '#BDBDBD',
  error: {
    main: '#ff5225',
  },
  text: '#4A4A4A',
  warning: {
    main: '#faa900',
    light: '#fff8e1',
  },
} as const


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
