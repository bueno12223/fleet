import { StyleSheet } from 'react-native'
import tw from 'settings/tailwind'

export const inputStyles = StyleSheet.create({
  default: {
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    fontSize: 16,
    color: 'white',
    placeholderTextColor: 'white',
    width: 500,
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontFamily: 'Montserrat-Regular',
    ...tw`max-w-xs`
  },
})
