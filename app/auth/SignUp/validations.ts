import * as Yup from 'yup'

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required('Requerido'),
  phone: Yup.string().required('Requerido').matches(/^[6]\d{7}$/, 'Tu teléfono debe empezar con 6 y tener 8 dígitos'),
  password: Yup.string().required('Requerido').min(8, 'Tu contraseña debe tener al menos 8 caracteres'),
  passwordConfirmation: Yup.string().required('Requerido').test('passwords-match', 'Las contraseñas no coinciden', function (value) {
    return this.parent.password === value
  }),
})