import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
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
import { User } from 'types/users'
import { Input } from 'components/Inputs/TextInput'
import { validationSchema } from './validations'
import { useAuth } from 'app/hooks/useAuth'
interface FormValues {
  code: string
}

const Verification = () => {
  const { user, onLogout } = useAuth()
  const [apiRequest, apiState] = useRequest('POST')

  const handleSubmit = async({ code }: FormValues) => {
    const response = await apiRequest<User>(API_USERS.verifyCode, { verificationCode: code })
    if(!response) {
      return
    }
    router.replace({
      pathname: '/Onboarding'
    })
  }



  return (
    <RegistrationLayout>  
      <TouchableOpacity  onPress={onLogout}>
        <AntDesign name='arrowleft' size={25} color='white' style={tw`mb-8 ml-8`} />
      </TouchableOpacity>
      <Formik
        initialValues={{ code: '' }}
        onSubmit={handleSubmit}
        validateOnChange={false}
        validationSchema={validationSchema}
        validateOnBlur={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={tw`flex-column items-center px-2 mt-30 h-full`}>
            <Text variant='title' style={[tw`mb-8`]}>Verifica tu teléfono</Text>
            <Text variant='body2' color='white' style={[tw`text-center mb-4 mx-4`]}>Te hemos enviado un código SMS con el código de verificación al númerro {user?.phone}</Text>
            <Input
              placeholderTextColor={colors.white} 
              color={colors.white}
              placeholder='Código de verificación' 
              onChangeText={handleChange('code')}
              onBlur={handleBlur('code')}
              value={values.code}
              error={errors.code}
            />
            <Button style={tw`mt-8`} color='white' loading={apiState.loading} variant='filled' text='Verificar' onPress={handleSubmit}/>
            <Text color='white' style={[tw`mt-8`]}>Reenviar código</Text>
          </View>
        )}
      </Formik>

    </RegistrationLayout>
  )
}

export default Verification
