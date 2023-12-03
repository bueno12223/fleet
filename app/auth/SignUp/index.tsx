import React, { useContext } from 'react'
import { View } from 'react-native'
import RegistrationLayout from 'components/layouts/RegistrationLayout'
import tw from '../../../settings/tailwind'
import { inputStyles } from '../../../styles/inputs'
import { colors } from '../../../styles/theme'
import Button from '../../../components/Inputs/Button'
import { Link, router } from 'expo-router'
import Text from 'components/general/Text'
import useRequest from 'app/hooks/useRequest'
import { Formik } from 'formik'
import { signUpSchema } from './validations'
import { User } from 'types/users'
import { API_USERS } from 'constants/api'
import { Input } from 'components/Inputs/TextInput'
import { serviceClient } from 'http/'
import { ErrorResponse } from 'http/http'
import useToast from 'app/hooks/useToast'
import { AuthContext } from 'app/_layout'

interface FormValues {
  name: string
  phone: string
  password: string
  passwordConfirmation: string

}

const SignUpScreen = () => {
  const [apiRequest, apiState] = useRequest('POST')
  const [, toastError] = useToast()
  const { setUser } = useContext(AuthContext)

  const handleLogin = async({ phone, password, name  }: FormValues) => {
    try {
      const response = await apiRequest<User>(API_USERS.signUp, { phone, password, name })
      if(!response) {
        return
      }
      const success = await serviceClient.login(phone, password)
      if(!success) {
        return toastError('Ocurrió un error al iniciar sesión')
      }
      const user = await serviceClient.getMe().catch(() => {
        return toastError('Ocurrió un error al obtener usuario')
      })
      setUser(response)
      if(!user || (user as ErrorResponse).message) {
        const message = (user as ErrorResponse).message || 'Error al obtener usuario'
        return toastError(message)
      }
      router.replace({
        pathname: '/auth/Verification',
        params: { phone }
      })
    } catch (error) {
      toastError('Ocurrió un error al crear la cuenta')
    }
  }

  return (
    <RegistrationLayout>
      <Formik
        initialValues={{ phone: '', password: '', passwordConfirmation: '', name: '' }}
        validationSchema={signUpSchema}
        onSubmit={handleLogin}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={tw`grid grid-cols-1 justify-center items-center`}>
            <Text variant='title1' color='white' weight='regular' style={[tw`mt-30 mb-8`]}>Bienvenido a Fleet!</Text>
            <Text variant='body2' weight='light' color='white' style={[ tw`text-center mb-8`]}>Llena los siguientes datos</Text>
            <Input 
              placeholderTextColor={colors.white} 
              placeholder='Nombre completo'
              color={colors.white}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
              error={errors.name}
              marginTop={2}
            />
            <Input
              placeholderTextColor={colors.white} 
              color={colors.white}
              placeholder='Número de teléfono'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              error={errors.phone}
              marginTop={8}
            />
            <Input 
              placeholderTextColor={colors.white} 
              secureTextEntry={true} 
              color={colors.white}
              placeholder='Contraseña'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              marginTop={8}
            />
            <Input 
              placeholderTextColor={colors.white} 
              secureTextEntry={true} 
              color={colors.white}
              placeholder='Confirmar contraseña'
              onChangeText={handleChange('passwordConfirmation')}
              onBlur={handleBlur('passwordConfirmation')}
              value={values.passwordConfirmation}
              error={errors.passwordConfirmation}
              marginTop={8}
            />
            <Button 
              text='Crear cuenta'
              onPress={handleSubmit}
              variant='filled'
              color='white'
              style={tw`mt-12`}
              loading={apiState.loading}
            />
            <View style={tw`flex-row items-center justify-center mt-6`}>
              <Text variant='body2' color='white' style={[tw`mx-2`]}>¿Ya tienes cuenta?</Text>
              <Link href='/auth/Login'>
                <Text variant='body2' color='white' weight='regular' style={[tw`ml-2`]}>Inicia sesión</Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </RegistrationLayout>
  )
}

export default SignUpScreen
