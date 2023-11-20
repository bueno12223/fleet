import { Text, TouchableOpacity, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import { buttonStyles } from '../../styles/buttons'
import tw from '../../settings/tailwind'
import { colors } from 'styles/theme'
import Loader from 'components/general/Loader'

interface Props {
  variant?: 'filled' | 'outlined' 
  color?: 'primary' | 'secondary' | 'white'
  text: string
  fullWidth?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: () => void
  loading?: boolean
}

const Button = ({ variant = 'filled', text, color = 'primary', onPress, style, fullWidth = true, loading = false }: Props) => {
  const baseStyle = buttonStyles[`${variant}-${color}`]
  const textStyle = buttonStyles[`textStyle-${variant}-${color}`]

  const fullWidthStyle = fullWidth ? tw`w-500 max-w-xs` : tw`w-auto`

  return (
    <TouchableOpacity style={[baseStyle, tw`max-w-xs w-full`, style, fullWidthStyle]} onPress={onPress}>
      {loading ? (
        <Loader color={'primary'} loading={loading} height={80} width={80} />
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default Button