import { View, Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { buttonStyles } from '../../styles/buttons'
import tw from '../../settings/tailwind'

interface Props {
  variant: 'filled' | 'outlined' 
  text: string
  style?: StyleProp<ViewStyle>
  color: 'primary' | 'secondary' | 'disabled'
  onPress: () => void
}

const Button = ({ variant, text, color, onPress, style }: Props) => {
  const baseStyle = buttonStyles[variant]
  const colorStyle = buttonStyles[color]
  const textStyle = variant === 'filled' 
      ? buttonStyles['textStyle-filled'] 
      : buttonStyles['textStyle-outlined']
  return (
    <TouchableOpacity style={[colorStyle, baseStyle, tw`max-w-xs`, style]} onPress={onPress}>
      <Text style={textStyle}>{text}</Text>
    </TouchableOpacity>
  )
}

export default Button
