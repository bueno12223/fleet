import React from 'react'
import { UserProps } from '../../types'
import { View, Text, Image } from 'react-native'
import tw from '../../settings/tailwind'

interface Props {
  size: string
  user: UserProps
}

const UserIcon = ({user, size}: Props) => {
  return (
    <View style={tw`pt-3 flex-row items-center`}>
      <Image style={tw`w-7 h-7 rounded-full`} source={{uri: user.avatarUrl}} />
      <Text style={tw`text-center text-softGray pl-1`}>{user.name}</Text>
    </View>
  )
}

export default UserIcon
