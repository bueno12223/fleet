import { RoundContainer } from 'components/common/RounderContainer'
import React, { useState } from 'react'
import { TouchableOpacity, TextStyle, ViewStyle, View } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import { colors } from 'styles/theme'
import dayjs from 'dayjs'
import { CloseIcon } from 'components/svg'
import Text from 'components/general/Text'
import tw from 'settings/tailwind'

type Props = {
  color?: string;
  width?: number;
  height?: number;
  marginTop?: number;
  value?: Date | string | null;
  onChange: (text: Date | null) => void;
  placeholder?: string;
  textStyle?: TextStyle;
  label?: string;
  stylesInputContainer?: ViewStyle;
  resetDate?: boolean;
  error?: string;
  maxDate?: Date;
  minDate?: Date;
};

export const InputDate: React.FC<Props> = ({
  color = colors.primary,
  width = 85,
  height = 6,
  marginTop = undefined,
  value,
  onChange,
  placeholder,
  resetDate,
  label,
  error,
  maxDate,
  minDate,
}) => {
  const [show, setShow] = useState(false)
  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      {
        label && <Text textAlign='center' variant='label'>{label}</Text>
      }
      <RoundContainer marginTop={marginTop} borderColor={color} width={width} height={height}>
        <TouchableOpacity

          onPress={() => setShow(true)}
        >
          <Text
          >
            {value ? dayjs(value).format('MM/DD/YYYY') : placeholder}
          </Text>
          {resetDate && (
            <TouchableOpacity
              hitSlop={{ bottom: 10, top: 10, right: 10, left: 20 }}
              onPress={() => onChange(null)}
            >
              <CloseIcon color={color} />
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      </RoundContainer>
      <DateTimePickerModal
        maximumDate={maxDate}
        minimumDate={minDate}
        date={value ? new Date(value) : new Date()}
        isVisible={show}
        mode='date'
        onConfirm={(date) => {
          setShow(false)
          onChange(date)
        }}
        onCancel={() => setShow(false)}
      />
      {error && <Text style={tw`text-center`}  variant='label' color='error'>{error}</Text>}
    </View>
  )
}
