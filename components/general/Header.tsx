import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import tw from '../../settings/tailwind'
import Logo from '../logo'
interface Props {

}

const Header = (props: Props) => {
  return (
      <View style={tw`p-4 bg-blue flex-row justify-between pt-12 items-center`}>
         <View style={tw`flex-row items-center`}>
          <Logo style={tw`w-2 p-6`} />
          <Text style={tw`text-2xl pl-2 text-white font-bold`}>Bravo!</Text>
         </View>
        <View style={tw`flex-row`}>
          <Icon name='user' style={tw`mx-8`} size={30} color='#fff' />
          <Icon name='bookmark' size={30} color='#fff' />
        </View>
      </View>
  )
}

export default Header
