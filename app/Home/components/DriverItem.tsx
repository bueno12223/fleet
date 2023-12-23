import { View } from 'react-native'
import React from 'react'
import Card from 'components/common/Card'
import tw from 'settings/tailwind'
import ProfilePicture from 'components/common/ProfilePicture'
import Text from 'components/general/Text'
import { DriverListItem } from 'types/drivers'
import StarsList from 'components/common/StarsList'
import { formatPrice } from 'app/utils'

const DriverItem = ({ driver }: { driver: DriverListItem }) => {
  return (
    <Card style={tw`mb-3`}>
      <View style={tw`flex flex-row justify-between items-center`}>
        <View style={tw`flex flex-col justify-center items-center mx-2`}>
          <ProfilePicture url={driver?.user?.profileImage?.url} size='medium' />
          <View style={tw`mt-2`}>
            <Text
              variant='label' 
              weight='regular' 
              color='neutral'
              style={tw`text-center text-start w-30`}
            >{driver.user.name}</Text>
          </View>
        </View>
        <View style={tw`flex flex-col justify-center items-center mx-2`}>
          <View style={tw`flex flex-row justify-center items-center`}>
            <Text variant='title1' color='primary' weight='semiBold' style={tw`mt-2 mr-2 text-3xl`}>
              {'4.0'}
            </Text>
            <StarsList rating={4} />
          </View>
          <View style={tw`flex flex-row justify-center items-center`}>
            <Text variant='title2' color='primary' weight='semiBold' style={tw`mt-2 mr-2`}>
              {formatPrice(driver.minPrice)}
            </Text>
            <Text variant='body2' color='neutral' weight='light' style={tw`mt-2`}>
          Cuota mínima
            </Text>
          </View>
        </View>
      </View>
    </Card>
  )
}

export default DriverItem