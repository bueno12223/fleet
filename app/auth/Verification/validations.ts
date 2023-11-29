import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  code: Yup.string().required('Requerido'),
})