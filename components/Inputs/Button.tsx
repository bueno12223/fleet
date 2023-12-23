import { Text, TouchableOpacity, StyleProp, ViewStyle, TouchableOpacityProps, View } from 'react-native'
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
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  loading?: boolean
  size?: 'small' | 'medium' | 'large'
}

const Button = ({ variant = 'filled', startIcon, endIcon, text, color = 'primary', onPress, style, fullWidth = true, loading = false, size = 'medium', ...props }: Props) => {
  const { buttonStyle, textStyle } = buttonStylesFactory({ variant, color })

  const fullWidthStyle = fullWidth ? tw`w-full max-w-xs` : {}

  const loaderColor = color === 'white' ? 'primary' : 'white'

  const sizeStyles = {
    'small': tw`py-0 px-4 h-8`,
    'medium': tw`py-2 px-4`,
    'large': tw`py-3 px-6`
  }

  const textSizeStyles = {
    'small': tw`text-sm`,
    'medium': tw`text-base`,
    'large': tw`text-xl`
  }
  
  const sizeStyle = sizeStyles[size]
  const textSizeStyle = textSizeStyles[size]

  return (
    <TouchableOpacity style={[buttonStyle, fullWidthStyle, sizeStyle, style]} onPress={!loading ? onPress : () => ({})} {...props}>
      {loading ? (
        <Loader color={loaderColor} loading={loading} height={80} width={80} />
      ) : (
        <View style={tw`flex flex-row items-center justify-center`}>
          {
            startIcon && <View style={tw`mr-2`}>{startIcon}</View>
          }
          <Text style={[textStyle, textSizeStyle]}>{text}</Text>
          {
            endIcon && <View style={tw`ml-2`}>{endIcon}</View>
        
          }
        </View>
      )}
    </TouchableOpacity>
  )
}

export default Button