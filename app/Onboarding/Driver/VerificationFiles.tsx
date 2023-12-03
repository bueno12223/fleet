import React, { Fragment } from 'react'
import { View } from 'react-native'
import { Formik } from 'formik'
import Button from 'components/Inputs/Button'
import { Input } from 'components/Inputs/TextInput'
import tw from 'settings/tailwind'
import OnboardingLayout from 'components/layouts/OnboardingLayout'
import useRequest from 'app/hooks/useRequest'
import ImagePickerInput from 'components/Inputs/ImagePicker'
import FilePickerInput from 'components/Inputs/FilePicker'
import SelectInput from 'components/Inputs/SelectInput'
import { FormValuesVerificationFiles, validationSchemaVerificationFiles } from './validations'
import { ScrollView } from 'react-native-gesture-handler'
import Text from 'components/general/Text'
import { InputDate } from 'components/Inputs/DatePicker'
import { API_DRIVERS } from 'constants/api'
import { router } from 'expo-router'

const DriverDocumentsForm = () => {
  const [apiRequest, apiState] = useRequest('POST')
  const [apiRequestPatch, apiStatePatch] = useRequest('PATCH')
  const handleSubmit = async (values: FormValuesVerificationFiles) => {
    const files = [
      { uri: values.frontLicenseImage?.assets?.[0]?.uri, parameters: { type: 'frontLicense' } },
      { uri: values.backLicenseImage?.assets?.[0]?.uri, parameters: { type: 'backLicense' } },
      { uri: values.frontDocumentImage?.assets?.[0]?.uri, parameters: { type: 'frontDocument' } },
      { uri: values.policeRecord?.assets?.[0]?.uri, parameters: { type: 'policeRecord' } },
      { uri: values.peaceAndSave?.assets?.[0]?.uri, parameters: { type: 'peaceAndSave' } },
      { uri: values.addressReceipt?.assets?.[0]?.uri, parameters: { type: 'addressReceipt' } },
    ]

    const uploadPromises = files.map(file => {
      if (file) {
        return apiRequest(API_DRIVERS.verificationFiles, file)
      }
    })

    uploadPromises.push(apiRequestPatch(API_DRIVERS.update, {
      licenseType: values.licenseType,
      licenseExpirationDate: values.expirationDate,
      documentNumber: values.documentNumber,
      documentType: values.documentType,
    }))

    const responses = await Promise.allSettled(uploadPromises)

    const error = responses.find(response => response.status === 'rejected')

    if(error) {
      return
    }

    router.replace({
      pathname: '/UserHome'
    })
  }

  return (
    <OnboardingLayout>
      <ScrollView style={tw`flex flex-col h-full`}>
        <Formik<FormValuesVerificationFiles>
          initialValues={{
            frontLicenseImage: null,
            backLicenseImage: null,
            licenseType: '',
            expirationDate: new Date(),
            frontDocumentImage: null,
            documentNumber: '',
            documentType: '',
            policeRecord: null,
            peaceAndSave: null,
            addressReceipt: null
          }}
          validationSchema={validationSchemaVerificationFiles}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleBlur, handleSubmit, setFieldValue, values, errors }) => (
            <Fragment>
              <View style={tw`flex flex-col items-center h-full pb-40`}>
                <Text textAlign='center' variant='title2' style={tw`mb-8 mt-4`}>verificación del conductor</Text>
                <Text textAlign='center' variant='body2' style={tw`mb-6 mx-2 text-center`}>Para poder verificar tu cuenta, necesitamos que nos envíes los siguientes documentos:</Text>
                <View style={tw`flex flex-col items-center h-full`}>
                  <ImagePickerInput
                    label='Foto delantera de la licencia'
                    onPress={(file) => setFieldValue('frontLicenseImage', file)}
                    value={values.frontLicenseImage}
                    error={errors.frontLicenseImage}
                    fileTypes={['images']}
                    variant='outlined'
                    showImage
                  />
                  <ImagePickerInput
                    label='Foto trasera de la licencia'
                    onPress={(file) => setFieldValue('backLicenseImage', file)}
                    value={values.backLicenseImage}
                    error={errors.backLicenseImage}
                    fileTypes={['images']}
                    variant='outlined'
                    showImage
                  />
                  <SelectInput
                    label='Tipo de licencia'
                    options={[
                      { label: 'A', value: 'A' },
                      { label: 'B', value: 'B' },
                      { label: 'C', value: 'C' },
                      { label: 'D', value: 'D' },
                      { label: 'E', value: 'E' },
                      { label: 'E1 a', value: 'E1 a' },
                      { label: 'E2 b', value: 'E2 b' },
                      { label: 'E3 c', value: 'E3 c' },
                      { label: 'F', value: 'F' },
                      { label: 'G', value: 'G' },
                      { label: 'H', value: 'H' },
                      { label: 'I', value: 'I' }
                    ]}
                    value={values.licenseType}
                    error={errors.licenseType}
                    onChange={(itemValue) => setFieldValue('licenseType', itemValue)}
                  />
                  <InputDate
                    label='Fecha de expiración de la licencia'
                    value={values.expirationDate}
                    onChange={(date) => {
                      setFieldValue('expirationDate', date)
                    }}
                    minDate={new Date()}
                  />
                  <ImagePickerInput
                    label='Foto delantera del documento'
                    onPress={(file) => setFieldValue('frontDocumentImage', file)}
                    value={values.frontDocumentImage}
                    error={errors.frontDocumentImage}
                    fileTypes={['images']}
                    variant='outlined'
                    showImage
                  />
                  <Input
                    onChangeText={handleChange('documentNumber')}
                    onBlur={handleBlur('documentNumber')}
                    value={values.documentNumber}
                    error={errors.documentNumber}
                    label='Número de documento'
                  />
                  <SelectInput
                    label='Tipo de documento'
                    options={[
                      { label: 'Cédula', value: 'ID' },
                      { label: 'Pasaporte', value: 'PASSPORT' },
                    ]}
                    value={values.documentType}
                    error={errors.documentType}
                    onChange={(itemValue) => setFieldValue('documentType', itemValue)}
                  />
                  <FilePickerInput
                    label='Record policivo'
                    onPress={(file) => setFieldValue('policeRecord', file)}
                    value={values.policeRecord}
                    error={errors.policeRecord}
                    fileTypes={['application/pdf']}
                    variant='outlined'

                  />
                  <FilePickerInput
                    label='Paz y salvo'
                    onPress={(file) => setFieldValue('peaceAndSave', file)}
                    value={values.peaceAndSave}
                    error={errors.peaceAndSave}
                    fileTypes={['application/pdf']}
                    variant='outlined'
                  />
                  <FilePickerInput
                    label='Recibo de luz, agua o servicio residencial'
                    onPress={(file) => setFieldValue('addressReceipt', file)}
                    value={values.addressReceipt}
                    error={errors.addressReceipt}
                    fileTypes={['all']}
                    variant='outlined'
                
                  />
                  <Button loading={apiState.loading || apiStatePatch.loading} text='Siguiente' onPress={handleSubmit} style={tw`m-auto`} />
                </View>
              </View>
            </Fragment>
          )}
        </Formik>
      </ScrollView>
    </OnboardingLayout>
  )
}

export default DriverDocumentsForm
