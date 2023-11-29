import { View, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../styles/theme'


interface Props {
  children: JSX.Element | JSX.Element[]
}

const index = ({ children }: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.mainContainer}>
        {children}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
    flex: 1,
  },
  safeArea: {
    backgroundColor: colors.primary,
    height: '100%',
    width: '100%',
    flex: 0,
  },
})


export default index
