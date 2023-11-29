import * as Yup from 'yup'
import dayjs from 'dayjs'

export const validationSchema = Yup.object().shape({
  minPrice: Yup.number().required('Requerido').test('minPrice', 'Debe ser mayor a 0', (value) => value > 0),

  birthday: Yup.mixed().required('Requerido')
    .test('dispatchDate', 'Invalid Date', (value: unknown) => {
      if (typeof value === 'string' || typeof value === 'number' || value instanceof Date) {
        return dayjs(value).isValid()
      }
      return false
    })
    .test('birthday', 'Debes ser mayor de 18 años', (value) => {
      const today = dayjs()
      const birthDate = dayjs(value as Date)
      if (!birthDate.isValid()) return false
      const age = today.diff(birthDate, 'year')
      return age >= 18
    }),
  image: Yup.object().required('Requerido'),
})