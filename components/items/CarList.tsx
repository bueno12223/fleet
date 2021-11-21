import React from 'react'
import { View, Text } from 'react-native'
import { carListPropType } from '../../types'
import { useGetCarData } from '../../hooks/useGetCarsData'
import CarItem from './CarItem'
interface Props {

}

const CarList = async(props: Props) => {
  const getCarData = useGetCarData()
  const [loading, data] = await getCarData()
  if(loading) {
    return <Text>cargando</Text>
  }
  return (
    <View>
      { data.map((data: carListPropType) => {
        <CarItem {...data} />
      })}
    </View>
  )
}

export default CarList
