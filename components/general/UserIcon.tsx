import React from 'react'
import { UserProps } from '../../types'
import { View, Text, Image } from 'react-native'

interface Props {
  size: String
  user: UserProps
}

const UserIcon = ({user, size}: Props) => {
  return (
    <View>
      <Image source={{uri: user.avatarUrl}} />
      <Text></Text>
    </View>
  )
}

export default UserIcon
