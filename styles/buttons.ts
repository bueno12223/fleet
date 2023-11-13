import { StyleSheet } from 'react-native'
import { colors } from '../constants/styles'
import { textStyles } from './text'

const defaultStyle= {
  height: 50,
  fontSize: 18,
  color: 'white',
  placeholderTextColor: 'white',
  width: '100%',
  paddingHorizontal: 20,
  paddingVertical: 10,
  margin: 8,
  borderRadius: 100,
}

export const buttonStyles = StyleSheet.create({
  primary: {
    ...defaultStyle,
    backgroundColor: colors.primary,
  },
  secondary: {
    ...defaultStyle,
    backgroundColor: colors.secondary,
  },
  disabled: {
    ...defaultStyle,
    backgroundColor: colors.disabled,
  },
  filled: {
    backgroundColor: colors.white,
    color: colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    margin: 'auto',
    borderWidth: 1,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  'textStyle-filled': {
    ...textStyles.body1,
    fontWeight: '400',
    color: colors.primary,
  },
  'textStyle-outlined': {
    ...textStyles.body1,
    fontWeight: '400',
    color: colors.primary,
    margin: 'auto',
    width: '100%',
  },
  
  })
