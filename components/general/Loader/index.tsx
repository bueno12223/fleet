import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'
import { colors } from 'styles/theme'

interface Props {
  loading: boolean
  height?: number
  width?: number
  color?: 'primary' | 'secondary' | 'white'
}

const Loader: React.FC<Props> = ({ loading, height = 100, width = 100, color = 'filled' }) => {
  const mapVariantToColor = (color: string) => {
    const map = {
      primary: colors.primary,
      secondary: colors.secondary,
      white: colors.white
    }
    return map[color as keyof typeof map]
  }
  return (
    loading ?
      <View style={styles.container}>
        <LottieView
          source={require('./loader.json')}
          autoPlay
          loop
          style={{ height, width, alignSelf: 'center' }}
          colorFilters={[
            {
              keypath: 'Shape Layer 2',
              color: mapVariantToColor(color)
            },
            {
              keypath: 'Shape Layer 1',
              color: mapVariantToColor(color)
            }
          ]}
        />
      </View>
      : null
  )
}

const styles = StyleSheet.create({
  container: {
  },
})


export default Loader
