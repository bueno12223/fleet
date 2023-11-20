import { View } from 'react-native'
import React from 'react'
import { Link, useLocalSearchParams } from 'expo-router'
import { colors } from 'styles/theme'
import tw from 'settings/tailwind'
import { inputStyles } from 'styles/inputs'
import RegistrationLayout from 'components/layouts/RegistrationLayout'
import { AntDesign } from '@expo/vector-icons' 
import Button from 'components/Inputs/Button'
import Text from 'components/general/Text'
import { Formik } from 'formik'
import useRequest from 'app/hooks/useRequest'
import { API_USERS } from 'constants/api'
import { router } from 'expo-router'
import TextInput from 'components/Inputs/TextInput'
import { User } from 'types/users'


interface Params {
  phone: string
  [key: string]: string
}

interface FormValues {
  code: string
}

const Verification = () => {
  const { phone } = useLocalSearchParams<Params>()
  const [apiRequest, apiState] = useRequest('POST')

  const handleSubmit = async({ code }: FormValues) => {
    const response = await apiRequest<User>(API_USERS.verifyCode, { phone, verificationCode: code })
    if(!response) {
      return
    }
    router.replace({
      pathname: '/UserHome'
    })
  }


  return (
    <RegistrationLayout>  
      <Link href='/auth/Login' style={tw`absolute top-8 left-4`}>
        <AntDesign name='arrowleft' size={25} color='white' style={tw`mb-8`} />
      </Link>
      <View style={tw`flex-column items-center px-2`}>
        <Formik
          initialValues={{ code: '' }}
          onSubmit={handleSubmit}
          validateOnChange={false}
          validateOnBlur={false}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <>
              <Text variant='title' style={[tw`mb-8`]}>Verifica tu teléfono</Text>
              <Text variant='body2' color='white' style={[tw`text-center mb-4`]}>Te hemos enviado un código SMS con el código de verificación al número {phone}</Text>
              <TextInput
                placeholderTextColor={colors.white} 
                style={[inputStyles.default]} 
                placeholder='Código de verificación' 
                onChangeText={handleChange('code')}
                onBlur={handleBlur('code')}
                value={values.code}
                error={errors.code}
              />
              <Button style={tw`mt-8`} color='white' loading={apiState.loading} variant='filled' text='Verificar' onPress={handleSubmit}/>
              <Text color='white' style={[tw`mt-8`]}>Reenviar código</Text>
            </>
          )}
        </Formik>

      </View>
    </RegistrationLayout>
  )
}

export default Verification
