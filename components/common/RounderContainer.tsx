import React from 'react'
import { View, ViewProps } from 'react-native'
import { buttonStylesFactory } from 'styles/buttons'
import { hp, wp } from 'styles/general'

interface Props extends ViewProps {
  color?: 'primary' | 'secondary' | 'white'
  variant?: 'filled' | 'outlined';
  width?: number;
  height?: number;
  marginTop?: number;
  borderRadius?: number;
  children?: React.ReactNode;
};

export const RoundContainer: React.FC<Props> = ({
  width = 85,
  height = 7.75,
  marginTop = undefined,
  borderRadius = undefined,
  children,
  variant = 'filled',
  color = 'primary',
  ...props
}) => {
  const { buttonStyle } = buttonStylesFactory({ variant, color })
  return (
    <View
      style={[
        {
          ...buttonStyle,
          width: wp(width),
          height: hp(height),
          ...(marginTop && { marginTop }),
          ...(borderRadius && { borderRadius }),
        },
      ]}
      {...props}
    >
      {children}
    </View>
  )
}
