import React, { Fragment, useEffect, useState } from 'react'
import { Platform, View } from 'react-native'
import { Formik } from 'formik'
import { validationSchema } from './validations'
import Button from 'components/Inputs/Button'
import { Input } from 'components/Inputs/TextInput'
import DateTimePicker from '@react-native-community/datetimepicker'
import tw from 'settings/tailwind'
import { RoundContainer } from 'components/common/RounderContainer'
import Text from 'components/general/Text'
import { colors } from 'styles/theme'
import useImagePicker from 'app/hooks/useImagePicker'
import { useAuth } from 'app/hooks/useAuth'
import OnboardingLayout from 'components/layouts/OnboardingLayout'
import useRequest from 'app/hooks/useRequest'
import { API_DRIVERS, API_USERS } from 'constants/api'
import useToast from 'app/hooks/useToast'
import { User } from 'types/users'
import { router } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'
import { Image } from 'expo-image'
import dayjs from 'dayjs'

interface FormValues {
  minPrice: string
  birthday: Date
  image: ImagePicker.ImagePickerResult | null
}

const MyForm = () => {
  const { user } = useAuth()
  const [apiRequest, apiState] = useRequest('POST')
  const [, toastError] = useToast()
  const [permissions, setPermissions] = useState(false)
  const [image, imageLoader, pickImage ] = useImagePicker()

  const handleSubmit = async({ birthday, minPrice }: FormValues) => {
    if(!image || !image?.assets?.[0]?.uri) {
      return toastError('Debes subir una imagen')
    }

    const imageUri = image?.assets?.[0]?.uri as string

    const fileName = imageUri.split('/').pop() || ''
    const match = /\.(\w+)$/.exec(fileName)
    const extension = match ? match[1] : ''
  
    if (!['jpg', 'jpeg', 'png'].includes(extension.toLowerCase())) {
      return toastError('El archivo debe ser una imagen en formato jpg, jpeg o png')
    }

    const imageResponse = await apiRequest(API_USERS.uploadProfileImage, imageUri)

    const response = await apiRequest<User>(API_DRIVERS.register, { 
      minPrice: Number(minPrice),
      birthDate: dayjs(birthday),
    })

    if(!response || !imageResponse) {
      return
    }

    router.replace({
      pathname: '/Onboarding/Driver/VerificationFiles'
    })
  }

  const getImagePickerPermissions = async() => {
    if (Platform.OS === 'android' || Platform.OS === 'ios') {
      const cameraRollStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
      const cameraStatus = await ImagePicker.requestCameraPermissionsAsync()
      if (cameraRollStatus.status !== 'granted' || cameraStatus.status !== 'granted') {
        toastError('Se requieren permisos de cámara y galería para subir imágenes')
      } else {
        setPermissions(true)
      }
    }
  }

  useEffect(() => {
    (async() => {
      await getImagePickerPermissions()
    })()
  }, [])

  return (
    <OnboardingLayout>
      <Formik<FormValues>
        initialValues={{ minPrice: '', birthday: new Date(), image: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
          <Fragment>
            <View style={tw`flex h-[95%] flex-col justify-between text-center`}>
              <View style={tw`flex flex-col items-center h-full`}>
                <Text variant='body1' style={tw`mb-8 mt-4`}>Completa los datos de conductor</Text>
                <View style={tw`my-4`}>
                  {image ? (
                    <Image source={{ uri: values.image?.assets?.[0].uri }} style={{ width: 200, height: 200 }} />
                  ) : (
                    <View style={{ width: 200, height: 200, backgroundColor: 'gray', justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={{ color: 'white' }}>Subir imagen</Text>
                    </View>
                  )}
                </View>
                <Text style={tw`mb-4`}>{user?.name}</Text>
                <Input
                  onChangeText={handleChange('minPrice')}
                  onBlur={handleBlur('minPrice')}
                  value={values.minPrice}
                  error={errors.minPrice}
                  type='numeric'
                  label='Precio mínimo de tus cuotas diarias'
                  keyboardType='numeric'
                  placeholder='0.00'

                />
                <RoundContainer marginTop={7} width={85} height={6}>
                  <DateTimePicker
                    value={values.birthday}
                    onChange={(_, date) => {
                      setFieldValue('birthday', date)
                    }}
                    textColor={colors.primary}
                    mode='date'
                    display='default'
                  />
                </RoundContainer>
                {
                  errors.birthday && <Text style={tw`text-center`} variant='label' color='error'>{errors.birthday as string}</Text>
                }
                <Button loading={imageLoader} variant='outlined' text='Seleccionar imagen' onPress={async () => {
                  if(!permissions) {
                    await getImagePickerPermissions()
                  }
                  const file = await pickImage()
                  setFieldValue('image', file)
                }} />
                {
                  values.image ? 
                    <Text style={tw`text-center`} variant='label' color='primary'>{values.image?.assets?.[0].fileName}</Text>
                    : <Text style={tw`text-center`} variant='label' color='error'>{errors.image as string}</Text>
                }
              </View>
              <Button loading={apiState.loading} text='Siguiente' onPress={handleSubmit} style={tw`m-auto`} />
            </View>
          </ Fragment>
        )}
      </Formik>
    </OnboardingLayout>
  )
}

export default MyForm