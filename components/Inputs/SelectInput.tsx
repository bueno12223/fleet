import React, { useState } from 'react'
import { Picker } from '@react-native-picker/picker'
import { View, Platform, ActionSheetIOS, TouchableOpacity } from 'react-native'
import { RoundContainer } from 'components/common/RounderContainer'
import tw from 'settings/tailwind'
import Text from 'components/general/Text'
import { ItemValue } from '@react-native-picker/picker/typings/Picker'
import { textStyleFactory } from 'styles/text'
import { colors } from 'styles/theme'
import { getContrastButtonColor } from 'styles/buttons'

interface PickerItem {
  label: string;
  value: string;
}

interface Props {
  options: PickerItem[];
  label?: string;
  error?: string;
  marginTop?: number;
  width?: number;
  height?: number;
  variant?: 'filled' | 'outlined';
  value: string | number;
  color?: 'primary' | 'secondary' | 'white';
  onChange: (value: ItemValue) => void;
}

const SelectInput: React.FC<Props> = ({ options, error, variant, color = 'primary', label, marginTop = 7, width = 85, height = 6, value, onChange }) => {
  const [selectedValue, setSelectedValue] = useState<string | number>(value ?? options[0].value)

  const handleValueChange = (itemValue: ItemValue) => {
    setSelectedValue(itemValue)
    onChange(itemValue)
  }

  const textStyle = textStyleFactory({ variant: 'body1', color, weight: 'regular' })
  const dropdownByPlatform = () => {
    if (Platform.OS === 'ios') {
      return (
        <TouchableOpacity
          style={tw`w-full flex justify-center items-center`}
          onPress={() =>
            ActionSheetIOS.showActionSheetWithOptions(
              {
                options: options.map(option => option.label),
                cancelButtonIndex: options.length,
              },
              buttonIndex => {
                handleValueChange(options[buttonIndex].value)
              },
            )
          }
        >
          <Text variant='body1' color={getContrastButtonColor(color, 'filled')} textAlign='center'>{options.find(option => option.value === selectedValue)?.label ?? 'Seleccionar'}</Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View style={tw`w-full`}>
          <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
          >
            {options.map((option) => (
              <Picker.Item key={option.value} value={option.value} label={option.label} color={colors.primary} style={textStyle} />
            ))}
          </Picker>
        </View>
      )
    }
  }

  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      {label && <Text textAlign='center' variant='label'>{label}</Text>}
      <RoundContainer marginTop={marginTop} width={width} height={height}>
        {dropdownByPlatform()}
      </RoundContainer>
      {error && <Text style={tw`text-center`} variant='label' color='error'>{error}</Text>}
    </View>
  )
}

export default SelectInput