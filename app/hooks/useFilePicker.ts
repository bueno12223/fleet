import { useState } from 'react'
import * as DocumentPicker from 'expo-document-picker'
import { DocumentType } from 'types'


const useDocumentPicker = (allowedTypes: DocumentType[]): [DocumentPicker.DocumentPickerResult | null, boolean, () => Promise<DocumentPicker.DocumentPickerResult>] => {
  const [document, setDocument] = useState<DocumentPicker.DocumentPickerResult | null>(null)
  const [loader, setLoader] = useState<boolean>(false)

  const pickDocument = async () => {
    setLoader(true)
    const result = await DocumentPicker.getDocumentAsync({
      type: allowedTypes.includes('all') ? '*/*' : allowedTypes.join(', '),
    })

    if (result.canceled) {
      setDocument(result)
    }
    
    setLoader(false)
    return result
  }

  return [document, loader, pickDocument]
}

export default useDocumentPicker