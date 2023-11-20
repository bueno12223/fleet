import Text from 'components/general/Text'
import React from 'react'
import { View } from 'react-native'
import MaskInputComponent, { MaskInputProps } from 'react-native-mask-input'
import tw from 'settings/tailwind'


interface Props extends MaskInputProps {
  error?: string
}

const MaskInput = ({ error, ...props}: Props) => {
  return (
    <View>
      <MaskInputComponent {...props} />
      {error && <Text style={tw`text-center`}  variant='label' color='error'>{error}</Text>}
    </View>
  )
}
export default MaskInput