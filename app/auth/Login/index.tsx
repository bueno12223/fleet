import { View } from 'react-native'
import React, { useState } from 'react'
import RegistrationLayout from '../../../components/layouts/RegistrationLayout'
import tw from '../../../settings/tailwind'
import { inputStyles } from '../../../styles/inputs'
import { colors } from '../../../styles/theme'
import Button from '../../../components/Inputs/Button'
import { Link, router } from 'expo-router'
import Text from 'components/general/Text'
import { Formik } from 'formik'
import { User } from 'types/users'
import { loginSchema } from './validations'
import TextInput from 'components/Inputs/TextInput'
import MaskInput from 'components/Inputs/MaskInput'
import { serviceClient } from 'http/index'
import useToast from 'app/hooks/useToast'
import { ErrorResponse } from 'http/http'


interface FormValues {
  phone: string
  password: string
}

const index = () => {
  const [loading, setLoading] = useState(false)
  const [, toastError] = useToast()

  const handleLogin = async({ phone, password }: FormValues) => {
    setLoading(true)
    const response = await serviceClient.login(phone, password)
    if(!response) {
      setLoading(false)
      return toastError('Usuario o contraseña incorrectos')
    }
    let user = await serviceClient.getMe()
    if(!user || (user as ErrorResponse).message) {
      const message = (user as ErrorResponse).message || 'Error al obtener usuario'
      setLoading(false)
      return toastError(message)
    }
    user = user as User
    if(!user.verified) {
      router.replace({
        pathname: '/auth/Verification',
        params: { phone }
      })
      return
    }
    router.replace({
      pathname: '/UserHome'
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
          <>
            <Text variant='title' weight='regular' color='white' style={[tw`mt-45 mb-4`]}>Bienvenido a Fleet!</Text>
            <Text variant='body2' weight='light' color='white' style={[ tw`text-center mb-8`]}>Iniciar sesión</Text>
            <MaskInput
              placeholderTextColor={colors.white} 
              style={[inputStyles.default, tw`max-w-xs`]} 
              placeholder='Numero de Teléfono'
              onChangeText={(_maskedText, rawText) => handleChange('phone')(rawText)}
              onBlur={handleBlur('phone')}
              value={values.phone}
              error={errors.phone}
            />
            <TextInput
              placeholderTextColor={colors.white} 
              style={[inputStyles.default, tw`max-w-xs`]} 
              secureTextEntry={true}
              placeholder='Contraseña'
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
              error={errors.password}
            />
            <Button style={tw`mt-8`} color='white' variant='filled' text='Iniciar sesión' loading={loading} onPress={handleSubmit}/>
            <Text variant='body2' color='white' style={[tw`mt-8`]}>Olvidaste tu contraseña</Text>
            <View style={tw`flex-row items-center mt-2 justify-center align-center`}>
              <Text variant='body2' color='white' style={[tw`m-2`]}>¿No tienes cuenta?</Text>
              <Link href='/auth/SignUp'>
                <Text variant='body2' weight='regular' color='white' style={[tw` mt-8`]}>Regístrate</Text>
              </Link>
            </View>
          </>
        )}
      </Formik>
    </RegistrationLayout>
  )
}


export default index
