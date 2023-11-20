import Text from 'components/general/Text'
import React from 'react'
import { TextInput as TextInputRN, TextInputProps, View } from 'react-native'
import tw from 'settings/tailwind'


interface Props extends TextInputProps {
  error?: string
}

const TextInput = ({ error, ...props}: Props) => {
  return (
    <View>
      <TextInputRN {...props} />
      {error && <Text style={tw`text-center`} variant='label' color='error'>{error}</Text>}
    </View>
  )
}
export default TextInput