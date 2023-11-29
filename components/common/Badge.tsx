
import React from 'react'
import { View, Text, ViewStyle } from 'react-native'
import { GeneralStyles } from 'styles/general'

interface BadgeProps {
  number: number;
  containerStyle?: ViewStyle;
  textContainerStyle?: ViewStyle;
}

const Badge: React.FC<BadgeProps> = ({ number, containerStyle, textContainerStyle }) => {
  return (
    <View style={[GeneralStyles.badgeContainer, containerStyle]}>
      <Text style={[GeneralStyles.badgeText, textContainerStyle]}>{number}</Text>
    </View>
  )
}

export default Badge
