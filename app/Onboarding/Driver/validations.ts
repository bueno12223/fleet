import * as Yup from 'yup'
import dayjs from 'dayjs'
import * as DocumentPicker from 'expo-document-picker'
import * as ImagePicker from 'expo-image-picker'

export const validationSchema = Yup.object().shape({
  minPrice: Yup.number().required('Requerido').test('minPrice', 'Debe ser mayor a 0', (value) => value > 0),
  birthday: Yup.mixed().required('Requerido')
    .test('birthday', 'Debes ser mayor de 18 años', (value) => {
      const today = dayjs()
      const birthDate = dayjs(value as Date)
      if (!birthDate.isValid()) return false
      const age = today.diff(birthDate, 'year')
      return age >= 18
    }),
  image: Yup.object().required('Requerido'),
})


export interface FormValuesVerificationFiles {
  frontLicenseImage: ImagePicker.ImagePickerResult | null;
  backLicenseImage: ImagePicker.ImagePickerResult | null;
  licenseType: string;
  expirationDate: Date;
  frontDocumentImage: ImagePicker.ImagePickerResult | null;
  documentNumber: string;
  documentType: string;
  policeRecord: DocumentPicker.DocumentPickerSuccessResult | null;
  peaceAndSave: DocumentPicker.DocumentPickerSuccessResult | null;
  addressReceipt: DocumentPicker.DocumentPickerSuccessResult | null;
}


export const validationSchemaVerificationFiles = Yup.object().shape({
  frontLicenseImage: Yup.mixed().required('Requerido'),
  backLicenseImage: Yup.mixed().required('Requerido'),
  licenseType: Yup.string().required('Requerido'),
  frontDocumentImage: Yup.mixed().required('Requerido'),
  documentNumber: Yup.string().required('Requerido'),
  documentType: Yup.string().required('Requerido'),
  policeRecord: Yup.mixed().required('Requerido'),
  peaceAndSave: Yup.mixed().required('Requerido'),
  addressReceipt: Yup.mixed().required('Requerido')
})