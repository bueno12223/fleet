import { Text, TouchableOpacity, StyleProp, ViewStyle, TouchableOpacityProps } from 'react-native'
import React from 'react'
import { buttonStylesFactory } from '../../styles/buttons'
import tw from '../../settings/tailwind'
import Loader from 'components/general/Loader'

interface Props extends TouchableOpacityProps {
  variant?: 'filled' | 'outlined' 
  color?: 'primary' | 'secondary' | 'white'
  text: string
  fullWidth?: boolean
  style?: StyleProp<ViewStyle>
  onPress?: () => void
  loading?: boolean
}

const Button = ({ variant = 'filled', text, color = 'primary', onPress, style, fullWidth = true, loading = false, ...props }: Props) => {
  const { buttonStyle, textStyle } = buttonStylesFactory({ variant, color })

  const fullWidthStyle = fullWidth ? tw`w-500 max-w-xs` : tw`w-auto`

  const loaderColor = color === 'white' ? 'primary' : 'white'

  return (
    <TouchableOpacity style={[buttonStyle, tw`max-w-xs w-full`, style, fullWidthStyle]} onPress={!loading ? onPress : () => ({})} {...props}>
      {loading ? (
        <Loader color={loaderColor} loading={loading} height={80} width={80} />
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </TouchableOpacity>
  )
}

export default Button