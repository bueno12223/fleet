import { StyleSheet } from 'react-native'
import { colors } from './theme'

const baseTextStyle = {
  fontSize: 16,
} as const

type fonts = 'Montserrat-Bold' | 'Montserrat-SemiBold' | 'Montserrat-Medium' | 'Montserrat-Regular' | 'Montserrat-Light'

const titleStyle = (color: string, fontFamily: fonts, fontSize = 24) => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize,
  color: color,
}) as const

const body1Style = (color: string, fontFamily: fonts) => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 18,
  color: color,
}) as const

const body2Style = (color: string, fontFamily: fonts) => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 16,
  color: color,
}) as const

const labelStyle = (color: string, fontFamily: fonts) => ({
  ...baseTextStyle,
  fontFamily: fontFamily,
  fontSize: 14,
  color: color,
}) as const

const styleFunctions = {
  'title1': titleStyle,
  'title2': titleStyle,
  'body1': body1Style,
  'body2': body2Style,
  'label': labelStyle,
}

interface StyleFactoryParams {
  styleType: 'title1' | 'body1' | 'body2' | 'label' | 'title2'
  color: string
  weight: 'bold' | 'semiBold' | 'regular' | 'light'
  size?: number
}

export function StyleFactory({ styleType, color, weight, size }: StyleFactoryParams) {
  const styleFunction = styleFunctions[styleType]
  const font = `Montserrat-${weight.charAt(0).toUpperCase() + weight.slice(1)}` as fonts

  return styleFunction(color, font, size)
}

export const textStyles = StyleSheet.create({
  'title1-white-light': titleStyle(colors.white, 'Montserrat-Regular'),
  'title1-white-regular': titleStyle(colors.white, 'Montserrat-Medium'),
  'title1-primary-regular': titleStyle(colors.primary, 'Montserrat-Medium'),
  'title1-primary-light': titleStyle(colors.primary, 'Montserrat-Regular'),
  'title1-error-light': titleStyle(colors.error.main, 'Montserrat-Regular'),
  'title1-error-regular': titleStyle(colors.error.main, 'Montserrat-Medium'),
  'title2-white-light': titleStyle(colors.white, 'Montserrat-Regular', 20),
  'title2-white-regular': titleStyle(colors.white, 'Montserrat-Medium', 20),
  'title2-primary-regular': titleStyle(colors.primary, 'Montserrat-Medium', 20),
  'title2-primary-light': titleStyle(colors.primary, 'Montserrat-Regular', 20),
  'title2-error-light': titleStyle(colors.error.main, 'Montserrat-Regular', 20),
  'title2-error-regular': titleStyle(colors.error.main, 'Montserrat-Medium', 20),
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