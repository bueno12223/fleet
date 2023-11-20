import { useFormik, FormikHelpers, FormikValues } from 'formik'
import { AnySchema } from 'yup'

export const REINIT_VALUES = { enableReinitialize: false }

type FormOptions = { enableReinitialize?: boolean, validateOnMount?: false, validateOnChange?: boolean, validateOnBlur?: boolean, parseBooleans?: boolean }

export function useForm<T extends FormikValues>(
  schema: AnySchema,
  initialValues: T,
  onSubmit: (_values: T, _formikHelpers: FormikHelpers<T>) => void | Promise<void>,
  formOptions: FormOptions = { validateOnMount: false, validateOnChange: false, validateOnBlur: false, parseBooleans: false },
  submitted = false,
) {

  const formik = useFormik({
    validationSchema: schema,
    initialValues,
    ...formOptions,
    onSubmit,
  })

  const setFieldValue = (name: string, value: unknown, validate?: boolean) => {
    const shouldValidate = submitted || validate
    formik.setFieldValue(name, value, shouldValidate)
  }

  const getFieldProps = (key: string) => {
    return {
      ...formik.getFieldProps(key),
      error: formik.errors[key],

    }
  }

  return { ...formik, getFieldProps, setFieldValue }
}
