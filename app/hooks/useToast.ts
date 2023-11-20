import Toast from 'react-native-toast-message'


type UseToast = [
  (_message: string) => void,
  (_message: string) => void,
  (_message: string) => void
];

const showToast = (type: 'success' | 'error' | 'warning', message: string) => {
  Toast.show({
    type: type,
    text1: message,
    visibilityTime: 4000,
    autoHide: true,
  })
}

const successToast = (message: string) => showToast('success', message)
const errorToast = (message: string) => showToast('error', message)
const warningToast = (message: string) => showToast('warning', message)

const useToast = (
): UseToast => {
  const showToast = (message: string, type: 'success' | 'error' | 'warning') => {
    const toastMethod = type === 'success' ? successToast : type === 'error' ? errorToast : warningToast

    toastMethod(message)
  }

  const handleSuccess = (message: string) => {
    showToast(message || 'Success!', 'success')
  }

  const handleError = (message: string) => {
    showToast(message || 'Something went wrong.', 'error')
  }

  const handleWarning = (message: string) => {
    showToast(message || 'Warning!', 'warning')
  }

  return [handleSuccess, handleError, handleWarning]
}

export default useToast