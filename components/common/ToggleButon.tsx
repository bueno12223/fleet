import Text from 'components/general/Text'
import React, { useState, useEffect } from 'react'
import { wp } from 'styles/general'
import { colors } from 'styles/theme'
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native'

const defaultItems = [
  {
    label: 'On',
    value: 'Si',
  },
  {
    label: 'Off',
    value: 'No',
  },
]

interface ToggleButtonProps {
  label?: string
  value?: string
  items?: Array<{ label: string, value: string }>
  onChange?: (value: string) => void
  disabled?: boolean
  error?: string
  width?: number
  color?: 'primary' | 'secondary' | 'white'
}

const ToggleButton = ({ label, value, items = defaultItems, onChange, disabled, width = 85, error, color = 'primary' }: ToggleButtonProps) => {
  const [selected, setSelected] = useState(value || defaultItems[0].value)
  const [animation, setAnimation] = useState(new Animated.Value(0))

  useEffect(() => {
    if (value) setSelected(value)
  }, [value])

  const handleSelect = (newValue: string, index: number) => {
    if (onChange) onChange(newValue)
    setSelected(newValue)
  
    Animated.timing(animation, {
      toValue: index * wp(width) / items.length,
      duration: 200,
      useNativeDriver: false,
    }).start()
  }

  const getStylesSelected = (itemValue: string, contrast = false) => {
    const isSelected = selected === itemValue
    let backgroundColor = isSelected ? (contrast ? 'white' : color) : (contrast ? color : 'white')

    if (color === 'white') {
      backgroundColor = !isSelected ? (contrast ? color : 'primary') : (contrast ? 'primary' : color)
    }

    return backgroundColor
  }
  return (
    <View style={[styles.container, { width: wp(width) }]}>
      {label && (
        <Text variant='label' color='neutral'>{label}</Text>
      )}
      <View style={styles.btnContainer}>
        {items.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.button, 
              { backgroundColor: colors[getStylesSelected(item.value)] }
            ]}
            onPress={() => handleSelect(item.value, index)}
            disabled={disabled}
          >
            <Text weight='regular' color={getStylesSelected(item.value, true)} style={[styles.buttonText]}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {error && (
        <Text style={styles.errorText}>{
          typeof error === 'string' ? error : label || 'Error'}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  btnContainer: {
    flexDirection: 'row',
    // borderWidth: 1,
    // borderColor: 'rgba(0, 0, 0, 0.14)',
    borderRadius: 20,
  },
  button: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  buttonText: {
    textTransform: 'none',
  },
  errorText: {
    marginTop: 5,
  },
})


export default ToggleButton
