import { StyleSheet, View } from 'react-native'
import React from 'react'
import ProfilePicture from './ProfilePicture'
import { User } from 'types/users'
import Text from 'components/general/Text'
import tw from 'settings/tailwind'

interface Props {
  user: User
  size?: 'small' | 'medium' | 'large'
}

const UserBadge = ({ user, size = 'small' }: Props) => {
  return (
    <View style={styles.container}>
      <ProfilePicture url={user?.profileImage?.url} size={size} />
      <Text 
        variant='label' 
        color='neutral'
        style={tw`ml-2`}
      >
        {user.name}
      </Text>
    </View>
  )
}

export default UserBadge

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  }
})