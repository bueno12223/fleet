import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import { colors } from '../../constants/styles'

interface Props {
  children: string | JSX.Element | JSX.Element[]
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
    display: 'flex',
    alignItems: 'center',
    marginTop: 200,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  }
})


export default index
