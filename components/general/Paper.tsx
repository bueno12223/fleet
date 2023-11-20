import React from 'react'
import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native'
import { colors } from 'styles/theme'

const styles = StyleSheet.create({
  default: {
    padding: 10,
  },
  forwardScroll: { height: '100%', overflow: 'hidden' },
  hidden: { overflow: 'hidden' },
  widthAuto: { width: 'auto' },
  auto: { overflow: 'scroll' }, 

  radius0: { borderRadius: 0 },
  radius4: { borderRadius: 4 },
  radius8: { borderRadius: 8 },
  radius10: { borderRadius: 10 },
  radius20: { borderRadius: 20 },
  
  paperWhite: { backgroundColor: colors.white },
  paperGray:  { backgroundColor: 'rgba(173, 185, 196, 0.17)' },

})

interface Props {
  children: string | JSX.Element | JSX.Element[]
  hidden?: boolean
  forwardScroll?: boolean
  radius?: 0 | 4 | 8 | 10 | 20
  bgColor?: 'paperWhite' | 'paperGray'
  fullWidth?: boolean
  overflow?: 'auto'
  style?: StyleProp<ViewStyle>
}

const Paper = ({
  children,
  hidden,
  forwardScroll,
  bgColor = 'paperWhite',
  fullWidth,
  overflow,
  style,
  
  ...rest
}: Props) => {
  const combinedStyles: StyleProp<ViewStyle> = [
    styles.default,
    forwardScroll && styles.forwardScroll,
    hidden && styles.hidden,
    bgColor && styles[bgColor],
    fullWidth && styles.widthAuto,
    overflow && styles[overflow],
    styles.radius10,
    style,
  ]

  return (
    <View style={combinedStyles} {...rest}>
      {children}
    </View>
  )
}

export default Paper
