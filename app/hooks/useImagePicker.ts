import { useState } from 'react'
import * as ImagePicker from 'expo-image-picker'

const useImagePicker = (): [ImagePicker.ImagePickerResult | null, boolean, () => Promise<ImagePicker.ImagePickerResult>] => {
  const [image, setImage] = useState<ImagePicker.ImagePickerResult | null>(null)
  const [loader, setLoader] = useState<boolean>(false)

  const pickImage = async () => {
    setLoader(true)
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result)
    }
    
    setLoader(false)
    return result
  }

  return [image, loader, pickImage]
}

export default useImagePicker