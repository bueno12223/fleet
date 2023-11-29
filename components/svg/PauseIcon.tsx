import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const PauseIcon: React.FC<Props> = ({ color = colors.background, size = 20 }) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox='0 0 24 24'>
      <Path d='M12 1a11 11 0 1011 11A11.013 11.013 0 0012 1zm0 20a9 9 0 119-9 9.011 9.011 0 01-9 9zM9 8h2v8H9zm4 0h2v8h-2z' />
    </Svg>
  )
}
