import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import { validationSchema } from './validations'
import Button from 'components/Inputs/Button'
import tw from 'settings/tailwind'
import Text from 'components/general/Text'
import { useAuth } from 'app/hooks/useAuth'
import OnboardingLayout from 'components/layouts/OnboardingLayout'
import useRequest from 'app/hooks/useRequest'
import { API_OWNERS, API_USERS } from 'constants/api'
import useToast from 'app/hooks/useToast'
import { User } from 'types/users'
import { router } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'
import SelectInput from 'components/Inputs/SelectInput'
import ImagePickerInput from 'components/Inputs/ImagePicker'
import { Input } from 'components/Inputs/TextInput'

interface FormValues {
  type: string | null
  image: ImagePicker.ImagePickerResult | null
  name: string | null
  documentNumber: string | null
  frontDocumentImage: ImagePicker.ImagePickerResult | null
}

const MyForm = () => {
  const { user } = useAuth()
  const [apiRequest, apiState] = useRequest('POST')
  const [, toastError] = useToast()

  const handleSubmit = async({ type, image, name, frontDocumentImage, documentNumber }: FormValues) => {
    if(!image || !image?.assets?.[0]?.uri) {
      return toastError('Debes subir una imagen')
    }

    const imageUri = image?.assets?.[0]?.uri as string
    const documentImageUri = frontDocumentImage?.assets?.[0]?.uri as string
    if(!imageUri) return toastError('Debes Seleccionar una imagen')

    const response = await apiRequest<User>(API_OWNERS.register, { 
      type,
      name,
      documentNumber,
    })

    const imageResponse = await apiRequest(API_USERS.uploadProfileImage, { uri: imageUri, parameters: {} })
    const documentImageResponse = await apiRequest(API_OWNERS.document, { uri: documentImageUri, parameters: {} })

    if(!response || !imageResponse || !documentImageResponse) {
      return
    }

    router.replace({
      pathname: '/UserHome',
      params: {
        showRegisterCarModal: true
      }
    })
  }

  return (
    <OnboardingLayout>
      <Formik<FormValues>
        initialValues={{ image: null, type: 'INDIVIDUAL', name: user?.name ?? null, documentNumber: null, frontDocumentImage: null }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, setFieldValue, values, errors, handleChange, handleBlur }) => (
          <Fragment>
            <View style={tw`flex h-[95%] flex-col justify-between text-center`}>
              <View style={tw`flex flex-col items-center h-full`}>
                <Text variant='body1' style={tw`mb-8 mt-4`}>Completa los datos como propietario</Text>
                <Input
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  value={values.name ?? ''}
                  error={errors.name}
                  label='Nombre'
                />
                <ImagePickerInput
                  label='Foto de perfil'
                  onPress={(file) => setFieldValue('image', file)}
                  value={values.image}
                  error={errors.image}
                  fileTypes={['images']}
                  variant='outlined'
                  showImage
                />
                <SelectInput
                  label='Tipo de propietario'
                  options={[
                    { label: 'Individuo', value: 'INDIVIDUAL' },
                    { label: 'Empresa', value: 'COMPANY' },
                  ]}
                  value={values.type ?? ''}
                  error={errors.type}
                  onChange={(itemValue) => setFieldValue('type', itemValue)}
                />
                <Input
                  onChangeText={handleChange('documentNumber')}
                  onBlur={handleBlur('documentNumber')}
                  value={values.documentNumber ?? ''}
                  error={errors.documentNumber}
                  label={values.type === 'INDIVIDUAL' ? 'Cédula' : 'RUC'}
                />
                {
                  values.type === 'INDIVIDUAL' && (
                    <ImagePickerInput
                      label='Foto de delantera de la cédula'
                      onPress={(file) => setFieldValue('frontDocumentImage', file)}
                      value={values.frontDocumentImage}
                      error={errors.frontDocumentImage}
                      fileTypes={['images']}
                      variant='outlined'
                      showImage
                    />
                  )
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