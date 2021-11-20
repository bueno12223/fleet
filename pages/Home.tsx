import React from 'react'
import { Text, View } from 'react-native'
import Header from '../components/general/Header'
import Search from '../components/general/Search'
import tw from '../settings/tailwind'
const Home = () => {
  return (
    <View style={tw`flex-col`}>
      <Text>Hola</Text>
      <Header />
      <Search />
    </View>
  )
}

export default Home
