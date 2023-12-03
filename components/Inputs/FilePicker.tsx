import React from 'react'
import Button from './Button'
import * as DocumentPicker from 'expo-document-picker'
import tw from 'settings/tailwind'
import Text from 'components/general/Text'
import { View } from 'react-native'
import useDocumentPicker from 'app/hooks/useFilePicker'
import { DocumentType } from 'types'

interface ImagePickerProps {
  label?: string;
  variant?: 'outlined' | 'filled';
  fileTypes: DocumentType[];
  onPress: (file: DocumentPicker.DocumentPickerResult | null) => Promise<unknown>;
  value: DocumentPicker.DocumentPickerResult | null;
  error?: string | undefined;
}

const FilePickerInput: React.FC<ImagePickerProps> = ({ onPress, label, variant, value, error, fileTypes }) => {
  const [, loading, pickFile] = useDocumentPicker(fileTypes)
  
  const getFileName = (file: DocumentPicker.DocumentPickerResult| null) => {
    if(!file) {
      return ''
    }
    return file?.assets?.[0]?.name
  }

  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      {
        label && <Text textAlign='center' variant='label'>{label}</Text>
      }
      <Button
        loading={loading}
        variant={variant}
        text={value ? getFileName(value) ?? '' : 'Seleccionar'}
        onPress={async () => {
          if(value) {
            onPress(null)
            return
          }
          const file = await pickFile()
          if(file.canceled) return
          onPress(file)
        }}
      />
      <Text style={tw`text-center`} variant='label' color='error'>
        {error}
      </Text>
    </View>
  )
}

export default FilePickerInput