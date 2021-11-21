import React from 'react'
import { View, Text, Image } from 'react-native'
import { carListPropType } from '../../types'

const CarItem = ({image, price, title}: carListPropType) => {

  return (
    <View>
      <Image source={image}/>
      <Text>{price}</Text>
      <Text>{title}</Text>
    </View>
  )
}

export default CarItem
