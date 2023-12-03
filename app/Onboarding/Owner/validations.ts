import * as Yup from 'yup'

export const validationSchema = Yup.object().shape({
  type: Yup.string().required('Requerido').nullable(),
  image: Yup.object().required('Requerido').nullable(),
  name: Yup.string().required('Requerido').nullable(),
  documentNumber: Yup.string().required('Requerido').nullable(),
  frontDocumentImage: Yup.object().test('frontDocumentImage', 'Requerido', function (value) {
    if (this.parent.type === 'INDIVIDUAL') return value !== null
    return true
  }).nullable(),
})
