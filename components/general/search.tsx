import  * as React from 'react'
import { View, TextInput  } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

import tw from '../../settings/tailwind'

interface Props {

}

const search = (props: Props) => {
  const [text, onChangeText] = React.useState("");

  return (
    <View style={tw`p-2 bg-blue pb-6`}>
      <View style={tw`flex-row bg-white rounded-xl py-2 px-12 items-start justify-start`}>
      <Icon name="search" style={tw`mx-8`} size={30} color="#216869" />
            <TextInput
        onChangeText={onChangeText}
        placeholder="Buscar auto"
        value={text}
        style={tw`bg-white`}
      />
      </View>
    </View>
  )
}

export default search
