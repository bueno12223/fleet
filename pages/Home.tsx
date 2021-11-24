import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/general/Header'
import Search from '../components/general/Search'
import tw from '../settings/tailwind'
import CarList from '../components/items/CarList'

const Home = () => {
  return (
    <View style={tw`flex-col`}>
      <Header />
      <Search />
      <CarList />
    </View>
  )
}

export default Home
