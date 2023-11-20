import { Text as TextRN, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { textStyles } from '../../styles/text'

interface Props {
  variant?: 'title' | 'body1' | 'body2' | 'label'
  weight?: 'regular' | 'light'
  color?: 'white' | 'primary' | 'error'
  style?: StyleProp<TextStyle>
  children?: React.ReactNode
}

const Text = ({ variant = 'body1', children, color = 'primary', style, weight = 'light' }: Props) => {
  const textStyle = textStyles[`${variant}-${color}-${weight}`]
  return (
    <TextRN style={[textStyle, style]}>{children}</TextRN>
  )
}

export default Text