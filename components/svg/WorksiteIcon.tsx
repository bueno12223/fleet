import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const WorksiteIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg data-name='more_icon' width={size} height={size} viewBox='0 0 30 28'>
      <Path
        data-name='Trazado 1237'
        d='M15 6.5V0.5H0V27.5H30V6.5H15ZM6 24.5H3V21.5H6V24.5ZM6 18.5H3V15.5H6V18.5ZM6 12.5H3V9.5H6V12.5ZM6 6.5H3V3.5H6V6.5ZM12 24.5H9V21.5H12V24.5ZM12 18.5H9V15.5H12V18.5ZM12 12.5H9V9.5H12V12.5ZM12 6.5H9V3.5H12V6.5ZM27 24.5H15V21.5H18V18.5H15V15.5H18V12.5H15V9.5H27V24.5ZM24 12.5H21V15.5H24V12.5ZM24 18.5H21V21.5H24V18.5Z'
        fill={color}
      />
    </Svg>
  )
}
