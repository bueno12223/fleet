import { View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { colors } from 'styles/theme'
import ToggleButton from 'components/common/ToggleButon'
import tw from 'settings/tailwind'
import useRequest from 'app/hooks/useRequest'
import { DriverListItem } from 'types/drivers'
import { Pagination } from 'types'
import { CarListItem } from 'types/cars'
import DriverItem from '../components/DriverItem'
import CarItem from '../components/CarItem'
import Text from 'components/general/Text'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import FiltersBottomSheet from '../components/FiltersBottomSheet'
import Button from 'components/Inputs/Button'

const index = () => {
  const [drivers, setDrivers] = useState<DriverListItem[]>([])
  const [cars, setCars] = useState<CarListItem[]>([])
  const [apiRequest, apiState] = useRequest('GET')
  const [searchType, setSearchType] = React.useState('drivers')

  const bottomSheetModalRef = React.useRef<BottomSheetModal>(null)

  const getDrivers = async () => {
    const response = await apiRequest<Pagination<DriverListItem>>('/drivers/available', {})
    if (response) {
      setDrivers(response.items)
    }
  }

  const getCars = async () => {
    const response = await apiRequest<Pagination<CarListItem>>('/cars/available', {})
    if (response) {
      setCars(response.items)
    }
  }

  useEffect(() => {
    if (searchType === 'drivers') {
      getDrivers()
    } else {
      getCars()
    }
  },  [searchType])

  return (
    <View>
      <View style={{ height: 80, backgroundColor: colors.primary, ...tw`flex flex-col justify-center items-center` }}>
        <ToggleButton
          color='white'
          value={searchType}
          onChange={setSearchType}
          items={[
            {
              label: 'Conductores',
              value: 'drivers',
            },
            {
              label: 'Vehículos',
              value: 'cars',
            },
          ]}
        />
        <Button
          text='Filtros'
          variant='outlined'
          color='white'
          onPress={() => bottomSheetModalRef.current?.present()}
          style={tw`mt-2`}
        />
      </View>
      <View style={tw`flex flex-col justify-center items-center px-4 py-2`}>
        {
          apiState.loading ? <Text variant='body1' color='neutral' weight='light' style={tw`mt-4 mb-2`}>Cargando...</Text> :
            searchType === 'drivers'
              ? drivers.map((driver) => (
                <DriverItem key={driver.id} driver={driver} />
              ))
              : cars.map((car) => (
                <CarItem key={car.id} car={car} />
              ))
        }
      </View>
      {/* <FiltersBottomSheet
        ref={bottomSheetModalRef}
      /> */}
    </View>
  )
}

export default index