import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const EyeVisibleIcon: React.FC<Props> = ({
  color = colors.primary,
  size = 28,
}) => {
  return (
    <Svg viewBox='0 0 96 96' width={size} height={size}>
      <Path
        d='M94.994 44.672C83.679 27.702 70.155 11.999 48 11.999S12.321 27.703 1.006 44.672a6.006 6.006 0 000 6.656C12.321 68.298 25.845 84.001 48 84.001s35.679-15.704 46.994-32.673a6.006 6.006 0 000-6.656zM48 72C35.267 72 25.33 65.21 13.265 48 25.329 30.79 35.267 24 48 24s22.67 6.79 34.735 24C70.671 65.21 60.733 72 48 72z'
        fill={color}
      />
      <Path d='M48 36a12 12 0 1012 12 12.016 12.016 0 00-12-12z' fill={color} />
    </Svg>
  )
}
