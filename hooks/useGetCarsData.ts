import { useState } from "react"
import { carListPropType } from '../types'
export const useGetCarData = function() {
  const getData: any= async() => {
    const [loading, setLoading] = useState(true)
    try {
      const data: [carListPropType] = await fetch('https://fakestoreapi.com/products').then(res => res.json())
      setLoading(false)
      return [loading, data]
    } catch (error) {
      console.log(error)
      throw new Error('Fallo al pedir los datos')
    }
  }
  return getData
}
