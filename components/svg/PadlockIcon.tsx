import React from 'react'
import Svg, { Rect, Path, Circle } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const PadlockIcon: React.FC<Props> = ({
  color = colors.background,
  size = 28,
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 256 256'>
      <Path fill='none' d='M0 0H256V256H0z' />
      <Rect
        width='176'
        height='128'
        x='40'
        y='88'
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
        rx='8'
      />
      <Path
        fill='none'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
        d='M92 88V52a36 36 0 0172 0v36'
      />
      <Circle cx='128' cy='152' r='16' />
    </Svg>
  )
}
