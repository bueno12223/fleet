import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import RegistrationLayout from '../../components/layouts/RegistrationLayout'
import tw from '../../settings/tailwind'
import { inputStyles } from '../../styles/inputs'
import { colors } from '../../constants/styles'
import { textStyles } from '../../styles/text'
import Button from '../../components/Inputs/Button'

const index = () => {

  const handleClickSignUp = () => {
    navigator.navigate('SignUp')
  }
  return (
    <RegistrationLayout>
      <Text style={[textStyles.title, tw`mb-16`]}>Bienvenido a Fleet!</Text>
      <Text style={[textStyles.body2, tw`text-white text-center font-light mb-8`]}>Iniciar sesión</Text>
      <TextInput placeholderTextColor={colors.white} style={[inputStyles.default, tw`max-w-xs`]} placeholder='Numero de Teléfono / Email'/>
      <TextInput 
        placeholderTextColor={colors.white} 
        style={[inputStyles.default, tw`max-w-xs`]} 
        secureTextEntry={true}
        placeholder='Contraseña'/>
      <Button style={tw`mt-8`} color='primary' variant='filled' text='Iniciar sesión' onPress={() => console.log('Pressed')}/>
      <Text style={[textStyles.body1, tw`text-white mt-8`]}>Olvidaste tu contraseña</Text>
      <View style={tw`flex-row items-center mt-2 justify-center align-center`}>
        <Text style={[textStyles.body1, tw`text-white`]}>No tienes cuenta?</Text>
        <TouchableOpacity onPress={() => console.log('Pressed')}>
          <Text style={[textStyles.body1, textStyles.bold,tw` mt-8 ml-2`]}>Regístrate</Text>
        </TouchableOpacity>
      </View>

    </RegistrationLayout>
  )
}


export default index
