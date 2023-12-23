import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
  background?: string;
};

export const HourglassIcon: React.FC<Props> = ({
  color = colors.background,
  size = 28,
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 256 256'>
      <Path fill='none' d='M0 0H256V256H0z' />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
        d='M128 128L67.2 82.4A8.1 8.1 0 0164 76V40a8 8 0 018-8h112a8 8 0 018 8v35.6a8.1 8.1 0 01-3.2 6.4L128 128h0M128 128l-60.8 45.6A8.1 8.1 0 0064 180v36a8 8 0 008 8h112a8 8 0 008-8v-35.6a8.1 8.1 0 00-3.2-6.4L128 128h0'
      />
    </Svg>
  )
}
