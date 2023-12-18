import { Text as TextRN, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { textStyles } from '../../styles/text'
import tw from 'settings/tailwind'

interface Props {
  variant?: 'title1' | 'title2' | 'body1' | 'body2' | 'label'
  weight?: 'regular' | 'light' 
  color?: 'white' | 'primary' | 'error'
  textAlign?: 'center' | 'left' | 'right'
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
}

const Text = ({ variant = 'body1', children, color = 'primary', style, weight = 'light' }: Props) => {
  const textStyle = textStyles[`${variant}-${color}-${weight}`]

  const textAlign = tw`text-${variant}`

  return (
    <TextRN style={[textStyle, style, textAlign]}>{children}</TextRN>
  )
}

export default Text