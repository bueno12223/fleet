import React from 'react'
import Button from './Button'
import * as ImagePicker from 'expo-image-picker'
import tw from 'settings/tailwind'
import Text from 'components/general/Text'
import useImagePicker from 'app/hooks/useImagePicker'
import { View, Image } from 'react-native'
import usePermissions from 'app/hooks/usePermissions'

interface ImagePickerProps {
  label?: string;
  variant?: 'outlined' | 'filled';
  fileTypes: ['all' | 'images' | 'audio' | 'video' | 'pdf' | 'plainText' | 'unknown'];
  onPress: (file: ImagePicker.ImagePickerResult | null) => Promise<unknown>;
  value: ImagePicker.ImagePickerResult | null;
  error?: string | undefined;
  showImage?: boolean;
}

const ImagePickerInput: React.FC<ImagePickerProps> = ({  onPress, label, variant, value, error, showImage = false }) => {
  const [, loading, pickImage] = useImagePicker()
  const { permissions, checkAndRequestPermissions } = usePermissions(['camera' , 'mediaLibrary'])
  
  const getFileName = (file: ImagePicker.ImagePickerResult | null) => {
    if(!file) {
      return ''
    }
    return file?.assets?.[0]?.fileName
  }

  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      {
        label && <Text textAlign='center' variant='label'>{label}</Text>
      }
      <Button
        loading={loading}
        variant={variant}
        text={value ? 'Eliminar' : 'Seleccionar'}
        onPress={async () => {
          if (!permissions) {
            await checkAndRequestPermissions()
          }
          if(value) {
            onPress(null)
            return
          }
          const file = await pickImage()
          if(file.canceled) return
          onPress(file)
        }}
      />
      {value ? (
        showImage ? 
          <Image source={{ uri: value?.assets?.[0].uri }} style={{ width: 100, height: 100 , marginBottom: 24 }} /> :
          <Text style={tw`text-center`} variant='label' color='primary'>
            {getFileName(value)}
          </Text>
      ) : (
        <Text style={tw`text-center`} variant='label' color='error'>
          {error}
        </Text>
      )}
    </View>
  )
}

export default ImagePickerInput