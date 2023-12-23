import { StyleSheet, View, ViewStyle } from 'react-native'
import React from 'react'
import { colors } from 'styles/theme'
import Text from 'components/general/Text'
import tw from 'settings/tailwind'
import { wp } from 'styles/general'

interface Props {
  children?: React.ReactNode | React.ReactNode[]
  color?: 'white'
  text?: string
  fullWidth?: boolean
  style?: ViewStyle
}

const Card = ({ children, color = 'white', style, text, fullWidth = true }: Props) => {
  return (
    <View style={tw`flex flex-col justify-center items-start`}>
      { !! text &&<Text variant='label' color='neutral' weight='light' style={tw`mb-1 ml-2`}>
        {text}
      </Text>
      }
      <View style={[styles.baseStyle, styles[color], style, fullWidth ? styles.fullWidth : {}]}>
        {children}
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  baseStyle: {
    padding: 10,
    borderRadius: 10,
  },
  white: {
    backgroundColor: colors.white,
    borderColor: 'rgba(0, 0, 0, 0.10)',
    borderWidth: 1,
  },
  fullWidth: {
    width: wp(100) - 20
  }
})