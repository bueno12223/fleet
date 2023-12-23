import { View } from 'react-native'
import React from 'react'
import tw from 'settings/tailwind'
import StarIcon from 'components/svg/StarIcon'

const StarsList = ({ rating }: { rating: number }) => {
  return (
    <View style={tw`flex flex-row justify-center items-center mt-2`}>
      {      Array.from({ length: rating }).map((_, index) => (
        <StarIcon key={index} />
      ))
      }
    </View>
  )
}

export default StarsList