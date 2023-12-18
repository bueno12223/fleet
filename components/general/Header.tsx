import React from 'react'
import { View } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import tw from '../../settings/tailwind'
import Logo from '../logo'
import Text from './Text'

const Header = () => {
  return (
    <View style={tw`p-4 bg-blue flex-row justify-between pt-10 h-[370px] items-center`}>
      <View style={tw`flex-row items-center`}>
        <Logo style={tw`w-2 p-6`} />
        <Text variant='title1' weight='light' color='white'>Fleet</Text>
      </View>
      <Icon name='user' size={30} color='#fff' />
    </View>
  )
}

export default Header
