import React from 'react'
import { View, ViewProps } from 'react-native'
import { GeneralStyles, hp, wp } from 'styles/general'
import { colors } from 'styles/theme'

interface Props extends ViewProps {
  borderColor?: string;
  width?: number;
  height?: number;
  isDropdown?: boolean;
  marginTop?: number;
  borderRadius?: number;
  children?: React.ReactNode;
};

export const RoundContainer: React.FC<Props> = ({
  borderColor = colors.primary,
  width = 85,
  height = 7.75,
  isDropdown = false,
  marginTop = undefined,
  borderRadius = undefined,
  children,
  ...props
}) => {
  return (
    <View
      style={[
        isDropdown ? GeneralStyles.roundContainerDropdown : GeneralStyles.roundContainer,
        {
          borderColor: borderColor,
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
