import { useState, useEffect } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as DocumentPicker from 'expo-document-picker'
import { Platform } from 'react-native'

type PermissionType = 'camera' | 'mediaLibrary' | 'files'

const usePermissions = (permissionsToCheck: PermissionType[]) => {
  const [permissions, setPermissions] = useState({
    camera: false,
    mediaLibrary: false,
    files: true
  })

  const checkAndRequestPermissions = async () => {
    if (permissionsToCheck.includes('camera')) {
      const cameraStatus = await ImagePicker.getCameraPermissionsAsync()
      if (cameraStatus.status !== ImagePicker.PermissionStatus.GRANTED) {
        const newCameraStatus = await ImagePicker.requestCameraPermissionsAsync()
        setPermissions(prev => ({ ...prev, camera: newCameraStatus.status === ImagePicker.PermissionStatus.GRANTED }))
      } else {
        setPermissions(prev => ({ ...prev, camera: true }))
      }
    }

    if (permissionsToCheck.includes('mediaLibrary')) {
      const mediaLibraryStatus = await ImagePicker.getMediaLibraryPermissionsAsync()
      if (mediaLibraryStatus.status !== ImagePicker.PermissionStatus.GRANTED) {
        const newMediaLibraryStatus = await ImagePicker.requestMediaLibraryPermissionsAsync()
        setPermissions(prev => ({ ...prev, mediaLibrary: newMediaLibraryStatus.status === ImagePicker.PermissionStatus.GRANTED }))
      } else {
        setPermissions(prev => ({ ...prev, mediaLibrary: true }))
      }
    }

    if (Platform.OS === 'android' && permissionsToCheck.includes('files')) {
      const filesStatus = await DocumentPicker.getDocumentAsync({
        type: '*/*'
      })
      setPermissions(prev => ({ ...prev, files: !filesStatus.canceled }))
    }
  }

  useEffect(() => {
    checkAndRequestPermissions()
  }, [])

  return { permissions, checkAndRequestPermissions }
}

export default usePermissions