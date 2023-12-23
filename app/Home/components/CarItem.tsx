import { View } from 'react-native'
import React from 'react'
import Card from 'components/common/Card'
import tw from 'settings/tailwind'
import Text from 'components/general/Text'
import { formatPrice } from 'app/utils'
import { CarListItem } from 'types/cars'
import { Image } from 'expo-image'
import UserBadge from 'components/common/UserBadge'

const CarItem = ({ car }: { car: CarListItem }) => {
  return (
    <Card>
      <View style={tw`flex flex-row`}>
        <Image source={car?.mainImage.image.url} style={tw`w-7/12 h-40 rounded`} />
        <View style={tw`flex flex-col justify-center align-center ml-2`}>
          <Text
            variant='body2'
            weight='regular' 
            color='neutral'
            style={tw`text-center w-30`}
          >{`${car.brand.name} ${car.model} ${car.year}`}
          </Text>
          <View style={tw`flex flex-row justify-center items-end mb-4`}>
            <Text variant='title1' color='primary' weight='bold' style={tw`mt-4 text-center mr-2 text-4xl`}>
              {formatPrice(car.pricePerDay)}
            </Text>
            <Text variant='label' color='neutral' weight='light' style={tw`mb-2 text-xs left-0 mx-auto text-center w-full absolute top-10/12`}>
               Por día
            </Text>
          </View>
          <View style={tw`w-full mt-2`}>
            <UserBadge user={car.owner.user} />
          </View>
        </View>
      </View>
    </Card>
  )
}

export default CarItem