import React from 'react'
import { View } from 'react-native'
import {Header, Search} from '../components/general'
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
