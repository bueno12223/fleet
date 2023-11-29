import React from 'react'
import { View, ScrollView } from 'react-native'
import tw from '../../settings/tailwind'
import { carListPropType } from '../../types'
import CarItem from './CarItem'
interface Props {

}

const CarList = (props: Props) => {

  return (
    <ScrollView >
      <View style={tw`flex-row flex-wrap py-8 mb-10 justify-center`}>
      </View>
    </ScrollView>
  )
}

export default CarList
