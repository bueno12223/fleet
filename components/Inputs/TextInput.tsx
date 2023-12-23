import React, { useState } from 'react'
import { KeyboardTypeOptions, TextInput, View, TextInputProps } from 'react-native'
import { GeneralStyles } from 'styles/general'
import { IconButton } from 'components/common/iconButton'
import { RoundContainer } from 'components/common/RounderContainer'
import { AutoCompleteType, textContentType } from 'types'
import { EyeHiddenIcon, EyeVisibleIcon } from '../svg'
import Text from 'components/general/Text'
import tw from 'settings/tailwind'
import { getContrastInputColor } from 'styles/buttons'
import { colors } from 'styles/theme'


interface Props extends TextInputProps {
  color?: 'primary' | 'secondary' | 'white'
  variant?: 'outlined' | 'filled'
  placeholder?: string;
  width?: number;
  height?: number;
  marginTop?: number;
  type?: KeyboardTypeOptions;
  password?: boolean;
  value?: string;
  maxLength?: number;
  error?: string;
  label?: string;
  textContentTypeInput?: textContentType;
  autoCompleteType?: AutoCompleteType;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
  editable?: boolean;
};

export const Input: React.FC<Props> = ({
  color = 'primary',
  placeholder = '',
  width = 85,
  height = 6,
  marginTop = undefined,
  type = 'default',
  password = false,
  value,
  error = '',
  maxLength = undefined,
  autoCapitalize = undefined,
  textContentTypeInput = 'none',
  autoCompleteType = undefined,
  editable = true,
  label,
  variant = 'filled',
  ...props  
}) => {
  const [hidden, setHidden] = useState<boolean>(password)
  const textColor = getContrastInputColor(color, variant)
  return (
    <View style={tw`flex flex-col justify-center items-center`}>
      {
        label && <Text variant='label'>{label}</Text>
      }
      <RoundContainer marginTop={marginTop} variant={variant} color={color} width={width} height={height}>
        <TextInput
          style={[
            GeneralStyles.text,
            GeneralStyles.input,
            password && GeneralStyles.inputPassword,
            {
              color: colors[textColor],
            },
          ]}
          secureTextEntry={hidden}
          underlineColorAndroid='transparent'
          placeholder={placeholder}
          placeholderTextColor={textColor}
          keyboardType={type}
          value={value}
          maxLength={maxLength}
          autoCapitalize={autoCapitalize}
          autoComplete={autoCompleteType}
          textContentType={textContentTypeInput || 'newPassword'}
          editable={editable}
          {...props}
        />
        {password && (
          <View style={[GeneralStyles.passwordHiddenButton]}>
            <IconButton
              icon={
                !hidden
                  ? () => <EyeVisibleIcon size={20} color={color} />
                  : () => <EyeHiddenIcon size={20} color={color} />
              }
              onPress={() => setHidden(!hidden)}
            />
          </View>
        )}
      </RoundContainer>
      {error && <Text style={tw`text-center`} variant='label' color='error'>{error}</Text>}
    </View>
  )
}
