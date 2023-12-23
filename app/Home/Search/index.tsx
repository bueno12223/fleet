import { View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
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
import { BottomSheetFlatList, BottomSheetModal } from '@gorhom/bottom-sheet'
import Button from 'components/Inputs/Button'
import BottomSheet from 'components/common/BottomSheet'
import { Input } from 'components/Inputs/TextInput'
import { FilterIcon, PayrollIcon } from 'components/svg'
import StarIcon from 'components/svg/StarIcon'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import SelectInput from 'components/Inputs/SelectInput'
import StarsList from 'components/common/StarsList'

const index = () => {
  const [drivers, setDrivers] = useState<DriverListItem[]>([])
  const [cars, setCars] = useState<CarListItem[]>([])
  const [apiRequest, apiState] = useRequest('GET')
  const [searchType, setSearchType] = React.useState('drivers')

  const sheetMinPriceRef = useRef<BottomSheetModal>(null)
  const sheetReviewRef = useRef<BottomSheetModal>(null)
  const sheetSortRef = useRef<BottomSheetModal>(null)
  const snapPoints = React.useMemo(() => ['50%', '90%'], [])

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
      <View style={{ height: 'auto', backgroundColor: colors.primary, ...tw`flex flex-col justify-center items-center` }}>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={tw`flex flex-row`}>
          <Button
            text='Ordenar por'
            variant='outlined'
            color='white'
            size='small'
            fullWidth={false}
            onPress={() => sheetSortRef.current?.present()}
            startIcon={<FilterIcon color={colors['white']} />}
          />
          <Button
            text='Cuota mínima'
            variant='outlined'
            color='white'
            size='small'
            fullWidth={false}
            onPress={() => sheetMinPriceRef.current?.present()}
            startIcon={<PayrollIcon color={colors['white']} size={20} />}
          />
          <Button
            text='Puntuación'
            variant='outlined'
            color='white'
            size='small'
            fullWidth={false}
            onPress={() => sheetReviewRef.current?.present()}
            startIcon={<StarIcon color={colors['white']} />}
          />
        </ScrollView>
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
      <BottomSheet
        ref={sheetMinPriceRef}
        snapPoints={snapPoints}
        showCloseButton
      >
        <View style={tw`flex flex-col justify-center items-center`}>
          <Input
            label='Cuota mínima'
            keyboardType='numeric'
            placeholder='0'
            variant='outlined'
            style={tw`w-full`}
          />
          <Button text='Aplicar' variant='filled' color='primary' onPress={() => ({})} />
        </View>
      </BottomSheet>
      <BottomSheet
        ref={sheetReviewRef}
        snapPoints={snapPoints}
        showCloseButton
      >
        <FlatList
          style={tw`w-full`}
          data={[
            {
              label: '1 estrella',
              value: '1',
            },
            {
              label: '2 estrellas',
              value: '2',
            },
            {
              label: '3 estrellas',
              value: '3',
            },
            {
              label: '4 estrellas',
              value: '4',
            },
            {
              label: '5 estrellas',
              value: '5',
            },
          ]
          }
          renderItem={({ item }) => (
            <Button
              text={item.label}
              fullWidth={false}
              variant='outlined'
              color='primary'
              endIcon={<StarsList rating={parseInt(item.value)} />}
              onPress={() => ({})}
            />
          )}
        />
      </BottomSheet>
      <BottomSheet
        ref={sheetSortRef}
        snapPoints={snapPoints}
        showCloseButton
      >
        <Text variant='body1' style={tw`mb-4 ml-2`}>Ordenar por:</Text>
        <FlatList
          style={tw`w-full`}
          data={[
            {
              label: 'Precio mínimo',
              value: 'price',
            },
            {
              label: 'Puntuación',
              value: 'score',
            },
          ]
          }
          renderItem={({ item }) => (
            <Button
              text={item.label}
              fullWidth={false}
              variant='outlined'
              color='primary'
              onPress={() => ({})}
            />
          )}
        />
      </BottomSheet>
    </View>
  )
}

export default index