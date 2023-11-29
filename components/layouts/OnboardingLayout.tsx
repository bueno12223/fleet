import React from 'react'
import { View, StyleSheet, SafeAreaView } from 'react-native'
import tw from 'settings/tailwind'
import { colors } from 'styles/theme'

interface Props {
  children: JSX.Element | JSX.Element[]
}

const RegistroComponent = ({children}: Props) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={tw`bg-white rounded-xl mx-4 h-full`}>
        {children}
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  containerTop: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '45%',
    width: '100%',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  selected: {
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  containerBottom: {
    flex: 1,
    width: '100%',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
    height: '45%',
  },
  button: {
    padding: 15,
    width: '100%',
  },
  buttonText: {
    color: colors.primary,
    fontSize: 16,
    textAlign: 'center',
  },
})

export default RegistroComponent
