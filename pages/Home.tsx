import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/general/Header'
import Search from '../components/general/Search'
import tw from '../settings/tailwind'
import CarItem from '../components/items/CarItem'
const Home = () => {
  return (
    <View style={tw`flex-col`}>
      <Text>Hola</Text>
      <Header />
      <Search />
      <CarItem />
    </View>
  )
}

export default Home
