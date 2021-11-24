import React from 'react'
import { View, Text, Image } from 'react-native'
import { carListPropType } from '../../types'
import UserIcon from '../general/UserIcon'
import tw from '../../settings/tailwind'

const CarItem = ({carPhoto, ammontPerDay, ownerRate,title, ownerData}: carListPropType) => {
  return (
      <View style={tw`bg-white w-1/2.2 rounded-2xl overflow-hidden m-1.5 shadow-sm`}>
        <Image style={tw`w-full h-30`} source={{uri: carPhoto}}/>
        <View style={tw`flex-row justify-between p-2 w-full flex-wrap`}>
          <Text style={tw`w-1/1.5 text-lg text-textGray`}>{title}</Text>
          <Text style={tw`w-1/5 text-lg text-right font-bold text-textGray`}>{ownerRate}</Text>
          <UserIcon size='sm' user={ownerData}  />
          <Text style={tw`w-1/3 text-2xl  text-right text-blue pt-2`}>${ammontPerDay}</Text>
        </View>
      </View>
    )

}

export default CarItem
