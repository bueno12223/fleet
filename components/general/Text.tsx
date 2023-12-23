import { Text as TextRN, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { textStyleFactory } from '../../styles/text'
import tw from 'settings/tailwind'

interface Props {
  variant?: 'title1' | 'title2' | 'body1' | 'body2' | 'label'
  weight?: 'regular' | 'light' | 'bold' | 'semiBold'
  color?: 'white' | 'primary' | 'error' | 'text' | 'secondary' | 'neutral'
  textAlign?: 'center' | 'left' | 'right'
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
  noWrap?: boolean
}

const Text = ({ variant = 'body1', children, color = 'primary', style, weight = 'light', noWrap = false }: Props) => {
  const textStyle = textStyleFactory({ variant, color, weight })

  const textAlign = tw`text-${variant}`

  return (
    <TextRN style={[textStyle, style, textAlign]} numberOfLines={noWrap ? 1 : undefined}>{children}</TextRN>
  )
}

export default Text