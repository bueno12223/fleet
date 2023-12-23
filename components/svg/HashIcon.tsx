import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const HashIcon: React.FC<Props> = ({ color = colors.background, size = 28 }) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox='0 0 32 32'>
      <Path d='M 11 5 L 11 11 L 5 11 L 5 13 L 11 13 L 11 19 L 5 19 L 5 21 L 11 21 L 11 27 L 13 27 L 13 21 L 19 21 L 19 27 L 21 27 L 21 21 L 27 21 L 27 19 L 21 19 L 21 13 L 27 13 L 27 11 L 21 11 L 21 5 L 19 5 L 19 11 L 13 11 L 13 5 Z M 13 13 L 19 13 L 19 19 L 13 19 Z' />
    </Svg>
  )
}
