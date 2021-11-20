import React from 'react'
import { View, Text } from 'react-native'

interface Props {

}

const CarItem = (props: Props) => {
  fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
  return (
    <View>
      <Text></Text>
    </View>
  )
}

export default CarItem
