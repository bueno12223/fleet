import React from 'react'
import { Slot } from 'expo-router'
import Toast from 'react-native-toast-message'


export default function HomeLayout() {
  return(
    <>
      <Slot />
      <Toast />
    </>
    
  )
}