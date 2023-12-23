import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Image } from 'expo-image'
import tw from 'settings/tailwind'

interface Props {
  url: string
  size: 'small' | 'medium' | 'large'
}

const ProfilePicture = ({ url, size }: Props) => {
  const imageSize = size === 'small' ? 20 : size === 'medium' ? 80 : 120
  return (
    <View style={[tw`bg-gray-200`, styles.container, { width: imageSize, height: imageSize }]}>
      <Image source={url} contentFit='cover' style={[styles.image, { width: imageSize, height: imageSize }]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    backgroundColor: '#0553',
    borderRadius: 100,
  },
})

export default ProfilePicture