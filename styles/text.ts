import { StyleSheet } from 'react-native'
import { colors } from './theme'

const baseTextStyle = {
  fontSize: 16,
} as const

const titleStyle = (color: string, fontFamily: 'Montserrat-Regular' | 'Montserrat-Medium') => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 24,
  color: color,
}) as const

const body1Style = (color: string, fontFamily: 'Montserrat-Regular' | 'Montserrat-Medium') => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 18,
  color: color,
}) as const

const body2Style = (color: string, fontFamily: 'Montserrat-Regular' | 'Montserrat-Medium') => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 16,
  color: color,
}) as const

const labelStyle = (color: string, fontFamily: 'Montserrat-Regular' | 'Montserrat-Medium') => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 14,
  color: color,
}) as const

export const textStyles = StyleSheet.create({
  'title-white-light': titleStyle(colors.white, 'Montserrat-Regular'),
  'title-white-regular': titleStyle(colors.white, 'Montserrat-Medium'),
  'title-primary-regular': titleStyle(colors.primary, 'Montserrat-Medium'),
  'title-primary-light': titleStyle(colors.primary, 'Montserrat-Regular'),
  'body1-white-light': body1Style(colors.white, 'Montserrat-Regular'),
  'body1-primary-regular': body1Style(colors.primary, 'Montserrat-Medium'),
  'body1-white-regular': body1Style(colors.white, 'Montserrat-Medium'),
  'body1-primary-light': body1Style(colors.primary, 'Montserrat-Regular'),
  'body2-white-light': body2Style(colors.white, 'Montserrat-Regular'),
  'body2-white-regular': body2Style(colors.white, 'Montserrat-Medium'),
  'body2-primary-light': body2Style(colors.primary, 'Montserrat-Regular'),
  'body2-primary-regular': body2Style(colors.primary, 'Montserrat-Medium'),
  'label-white-light': labelStyle(colors.white, 'Montserrat-Regular'),
  'label-white-regular': labelStyle(colors.white, 'Montserrat-Medium'),
  'label-primary-light': labelStyle(colors.primary, 'Montserrat-Regular'),
  'label-primary-regular': labelStyle(colors.primary, 'Montserrat-Medium'),

  // Error
  'title-error-light': titleStyle(colors.error.main, 'Montserrat-Regular'),
  'title-error-regular': titleStyle(colors.error.main, 'Montserrat-Medium'),
  'body1-error-light': body1Style(colors.error.main, 'Montserrat-Regular'),
  'body1-error-regular': body1Style(colors.error.main, 'Montserrat-Medium'),
  'body2-error-light': body2Style(colors.error.main, 'Montserrat-Regular'),
  'body2-error-regular': body2Style(colors.error.main, 'Montserrat-Medium'),
  'label-error-light': labelStyle(colors.error.main, 'Montserrat-Regular'),
  'label-error-regular': labelStyle(colors.error.main, 'Montserrat-Medium'),
})