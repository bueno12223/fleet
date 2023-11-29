import React from 'react'
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native'
import Badge from './Badge'
import { GeneralStyles } from 'styles/general'

type Props = {
  icon: () => React.ReactElement;
  backgroundColor?: string;
  opacity?: number;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  hasPopUp?: boolean;
  hasUnreadNotifications?: boolean;
  popUpColor?: string;
  notificationsCount?: number;
};

export const IconButton: React.FC<Props> = ({
  icon,
  backgroundColor = 'transparent',
  opacity = 0.75,
  onPress = () => {},
  style = {},
  notificationsCount = 0,
}) => {
  return (
    <TouchableOpacity
      style={[
        GeneralStyles.buttonIcon,
        style,
        {
          backgroundColor: backgroundColor,
        },
      ]}
      activeOpacity={opacity}
      onPress={onPress}
    >
      {icon()}
      {notificationsCount > 0 && (
        <View style={[GeneralStyles.popUpIcon]}>
          <Badge number={notificationsCount} />
        </View>
      )}
    </TouchableOpacity>
  )
}
