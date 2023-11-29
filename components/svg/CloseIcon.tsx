import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const CloseIcon: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 256 256'>
      <Path fill='none' d='M0 0H256V256H0z' />
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        d='M200 56L56 200'
      />
      <Path
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='16'
        d='M200 200L56 56'
      />
    </Svg>
  )
}
