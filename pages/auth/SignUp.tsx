import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import RegistrationLayout from '../../components/layouts/RegistrationLayout'
import tw from '../../settings/tailwind'
import { inputStyles } from '../../styles/inputs'
import { colors } from '../../constants/styles'
import { textStyles } from '../../styles/text'
import Button from '../../components/Inputs/Button'

const SignUpScreen = () => {

  return (
    <RegistrationLayout>
      <Text style={[textStyles.title, tw`mb-16`]}>Bienvenido a Fleet!</Text>
      <Text style={[textStyles.body2, tw`text-white text-center font-light mb-8`]}>Llena los siguientes datos</Text>
      
      <TextInput 
        placeholderTextColor={colors.white} 
        style={[inputStyles.default, tw`mb-4`]} 
        placeholder='Nombre completo'
      />
      <TextInput 
        placeholderTextColor={colors.white} 
        style={[inputStyles.default, tw`mb-4`]} 
        placeholder='Email o número de teléfono'
      />
      <TextInput 
        placeholderTextColor={colors.white} 
        style={[inputStyles.default, tw`mb-4`]} 
        secureTextEntry={true} 
        placeholder='Contraseña'
      />
      <TextInput 
        placeholderTextColor={colors.white} 
        style={[inputStyles.default, tw`mb-8`]} 
        secureTextEntry={true} 
        placeholder='Confirmar contraseña'
      />
      
      <Button 
        text='Crear cuenta'
        onPress={() => console.log('Create Account Pressed')}
        color='primary' 
        variant='filled' 
        style={tw`mb-4`} 
      />
      
      <View style={tw`flex-row items-center justify-center`}>
        <Text style={[textStyles.body1, tw`text-white`]}>Ya tienes cuenta?</Text>
        <TouchableOpacity onPress={() => console.log('Sign In Pressed')}>
          <Text style={[textStyles.body1, textStyles.bold, tw`ml-2`]}>Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </RegistrationLayout>
  )
}

export default SignUpScreen
