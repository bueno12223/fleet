import React from 'react'
import { View, ScrollView } from 'react-native'
import tw from '../../settings/tailwind'
import { carListPropType } from '../../types'
import CarItem from './CarItem'
interface Props {

}

const CarList = (props: Props) => {
  const fakeCar: carListPropType = {
    ammontPerDay: 30,
    carPhoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVh42gTf-YbTduh2OqLEbaej9Le0aJxZbudZTOkJ36Yx001hXiz3B5XKmx0hwjYFTmvCI&usqp=CAU",
    title: 'Kia rio 2013',
    status: 70,
    ownerRate: 9.1,
    platforms: {
      uber: true,
      indrive: false,
      taxi: false,
      open: false,
    },
    ownerData: {
      _id: '212132',
      email: 'test@gmail.com',
      name: 'Pablo',
      avatarUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDJzEaxLN-jGRYYUO65pWu7Q9GXoNt4LUSSA&usqp=CAU'
    }
  }
  const data = [fakeCar, fakeCar, fakeCar,fakeCar, fakeCar, fakeCar, fakeCar,fakeCar]

  return (
    <ScrollView >
      <View style={tw`flex-row flex-wrap py-8 mb-10 justify-center`}>
          { data.map(info => (
            <CarItem {...info} key={Math.random()} />
          ))}
      </View>
    </ScrollView>
    )
}

export default CarList
