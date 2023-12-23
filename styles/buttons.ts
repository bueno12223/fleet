import { colors } from './theme'
import { textStyleFactory } from './text'

const defaultStyle = {
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

const styleFunctions = {
  'filled': filledStyle,
  'outlined': outlinedStyle,
}

const buttonTextStyleFactory = (color: StyleFactoryParams['color']) => ({
  ...textStyleFactory({ variant: 'body1', color, weight: 'regular' }),
  fontWeight: '400',
  color:  colors[color],
  margin: 'auto',
  width: '100%',
  textAlign: 'center',
}) as const

export const getContrastButtonColor = (color: StyleFactoryParams['color']): StyleFactoryParams['color'] => {
  const colorMap: Record<StyleFactoryParams['color'], StyleFactoryParams['color']> = {
    'primary': 'white',
    'secondary': 'white',
    'white': 'primary',
    'neutral': 'white',
  }
  return colorMap[color]
}

export const getContrastInputColor = (color: StyleFactoryParams['color'], variant: StyleFactoryParams['variant']): StyleFactoryParams['color'] => {
  const colorMapFilled: Record<StyleFactoryParams['color'], StyleFactoryParams['color']> = {
    'primary': 'white',
    'secondary': 'white',
    'white': 'primary',
    'neutral': 'white',
  }
  const colorMapOutlined: Record<StyleFactoryParams['color'], StyleFactoryParams['color']> = {
    'primary': 'primary',
    'secondary': 'secondary',
    'white': 'white',
    'neutral': 'neutral',
  }
  return variant === 'filled' ? colorMapFilled[color] : colorMapOutlined[color]
}

interface StyleFactoryParams {
  variant: 'filled' | 'outlined'
  color: 'primary' | 'secondary' | 'white' | 'neutral'
}

export const buttonStylesFactory = ({ variant, color }: StyleFactoryParams) => {
  const styleFunction = styleFunctions[variant](colors[color])
  return {
    buttonStyle: styleFunction,
    textStyle: buttonTextStyleFactory(getContrastButtonColor(color)),
  }
}