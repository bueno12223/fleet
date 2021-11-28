import  * as React from 'react'
import { View, TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import tw from '../../settings/tailwind'

interface Props {

}

const search = (props: Props) => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={tw`p-4 pt-0 bg-blue pb-6`}>
      <View style={tw`flex-row bg-white rounded-xl py-2 items-start justify-start items-center`}>
      <Icon name="search" style={tw`ml-2`} size={30} color="#216869" />
            <TextInput
        onChangeText={onChangeText}
        placeholder="Buscar auto"
        value={text}
        style={tw`bg-white ml-4`}
      />
      </View>
    </View>
  )
}

export default search
