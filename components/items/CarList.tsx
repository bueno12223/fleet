import React from 'react'
import { View,  } from 'react-native'
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
      name: 'test test',
      avatarUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png'
    }
  }
  const data = [fakeCar, fakeCar, fakeCar,fakeCar]

  return (
    <View style={tw`flex-row flex-wrap py-12 justify-center`}>
        { data.map(info => (
          <CarItem {...info} key={Math.random()} />
        ))}
    </View>
  )
}

export default CarList
