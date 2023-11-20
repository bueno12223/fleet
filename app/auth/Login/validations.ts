import * as Yup from 'yup'

export const loginSchema = Yup.object().shape({
  phone: Yup.string().required('Requerido').matches(/^[6]\d{7}$/, 'Tu teléfono debe empezar con 6 y tener 8 dígitos'),
  password: Yup.string().required('Requerido').min(8, 'Tu contraseña debe tener al menos 8 caracteres'),
})