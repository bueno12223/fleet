import { StyleSheet } from 'react-native'
import { textStyles } from './text'
import { colors } from './theme'

const defaultStyle= {
  height: 50,
  fontSize: 18,
  paddingHorizontal: 20,
  paddingVertical: 10,
  margin: 8,
  borderRadius: 100,
}

const filledStyle = (color: string) => ({
  ...defaultStyle,
  backgroundColor: color,
  color: color,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}) as const

const outlinedStyle = (color: string) => ({
  ...defaultStyle,
  backgroundColor: 'transparent',
  borderColor: color,
  borderWidth: 1,
  borderRadius: 100,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}) as const

const textStyle = (color: string) => ({
  ...textStyles['body1-primary-light'],
  fontWeight: '400',
  color: color,
  margin: 'auto',
  width: '100%',
  textAlign: 'center',
}) as const

export const buttonStyles = StyleSheet.create({
  'filled-primary': filledStyle(colors.primary),
  'filled-white': filledStyle(colors.white),
  'filled-secondary': filledStyle(colors.secondary),
  'outlined-primary': outlinedStyle(colors.primary),
  'outlined-white': outlinedStyle(colors.white),
  'outlined-secondary': outlinedStyle(colors.secondary),
  'textStyle-filled-primary': textStyle(colors.white),
  'textStyle-outlined-white': textStyle(colors.white),
  'textStyle-filled-white': textStyle(colors.primary),
  'textStyle-outlined-primary': textStyle(colors.primary),
  'textStyle-filled-secondary': textStyle(colors.secondary),
  'textStyle-outlined-secondary': textStyle(colors.secondary),
})