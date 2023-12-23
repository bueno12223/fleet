import { View } from 'react-native'
import React, { useContext, useState } from 'react'
import RegistrationLayout from '../../../components/layouts/RegistrationLayout'
import tw from '../../../settings/tailwind'
import { colors } from '../../../styles/theme'
import Button from '../../../components/Inputs/Button'
import { Link, router } from 'expo-router'
import Text from 'components/general/Text'
import { Formik } from 'formik'
import { User } from 'types/users'
import { loginSchema } from './validations'
import { serviceClient } from 'http/index'
import useToast from 'app/hooks/useToast'
import { ErrorResponse } from 'http/http'
import { Input } from 'components/Inputs/TextInput'
import { AuthContext } from 'app/contexts'


interface FormValues {
  phone: string
  password: string
}


const index = () => {
  const [loading, setLoading] = useState(false)
  const [, toastError] = useToast()
  const { setUser } = useContext(AuthContext)

  const handleLogin = async({ phone, password }: FormValues) => {
    setLoading(true)
    const response = await serviceClient.login(phone, password)
    if(!response) {
      setLoading(false)
      return toastError('Usuario o contraseña incorrectos')
    }
    let user = await serviceClient.getMe().catch(() => {
      setLoading(false)
      serviceClient.logout()
      toastError('Usuario o contraseña incorrectos')
    })
    if(!user || (user as ErrorResponse).message) {
      const message = (user as ErrorResponse).message || 'Error al obtener usuario'
      setLoading(false)
      return toastError(message)
    }
    user = user as User
    setUser(user)
    if(!user.verified) {
      router.replace({
        pathname: '/auth/Verification',
        params: { phone }
      })
      return
    }
    if(!user.driver || !user.owner) {
      router.replace({
        pathname: '/Onboarding'
      })
      return
    }
    router.replace({
      pathname: '/Home/Dashboard',
    })
  }

  return (
    <RegistrationLayout>
      <Formik
        initialValues={{ phone: '', password: '' }}
        validationSchema={loginSchema}
        onSubmit={handleLogin}
        validateOnChange={false}
        validateOnBlur={false}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
          <View style={tw`flex-column items-center px-2 h-full`}>
            <Text variant='title1' weight='regular' color='white' style={[tw`mt-45 mb-4`]}>Bienvenido a Fleet!</Text>
            <Text variant='body2' weight='light' color='white' style={[ tw`text-center mb-8`]}>Iniciar sesión</Text>
            <Input
              placeholderTextColor={colors.white} 
              placeholder='Numero de Teléfono'
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
              error={errors.phone}
              variant='outlined'
              color='white'
              keyboardType='numeric'
            />
            <Input
              placeholderTextColor={colors.white} 
              placeholder='Contraseña'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
              variant='outlined'
              color='white'
              password
              marginTop={8}
            />
            <Button style={tw`mt-8`} color='white' variant='filled' text='Iniciar sesión' loading={loading} onPress={handleSubmit}/>
            <Text variant='body2' color='white' style={[tw`mt-8`]}>Olvidaste tu contraseña</Text>
            <View style={tw`flex-row items-center mt-2 justify-center text-center`}>
              <Text variant='body2' color='white' style={[tw`m-2`]}>¿No tienes cuenta?</Text>
              <Link href='/auth/SignUp'>
                <Text variant='body2' weight='regular' color='white' style={[tw` mt-8`]}>Regístrate</Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
    </RegistrationLayout>
  )
}


export default index
