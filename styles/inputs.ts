import { StyleSheet } from 'react-native'
import tw from 'settings/tailwind'

export const inputStyles = StyleSheet.create({
  default: {
    height: 50,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 100,
    fontSize: 18,
    color: 'white',
    placeholderTextColor: 'white',
    width: 500,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 8,
    fontFamily: 'Montserrat-Regular',
    ...tw`max-w-xs`
  },
})
