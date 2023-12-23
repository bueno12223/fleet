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

export interface StyleFactoryParams {
  variant: 'title1' | 'body1' | 'body2' | 'label' | 'title2'
  color: 'primary' | 'secondary' | 'white' | 'error' | 'text' | 'neutral'
  weight: 'bold' | 'semiBold' | 'regular' | 'light'
  size?: number
}

export function textStyleFactory({ variant, color, weight, size }: StyleFactoryParams) {
  const styleFunction = styleFunctions[variant]
  const font = `Montserrat-${weight.charAt(0).toUpperCase() + weight.slice(1)}` as fonts

  return styleFunction(colors[color], font, size)
}