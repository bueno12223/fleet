import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const LocationIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg data-name='more_icon' width={size} height={size} viewBox='0 0 29 32'>
      <Path
        data-name='Trazado 1237'
        d='M1.38016 10.7374C4.46522 -2.25581 24.5572 -2.24081 27.6266 10.7524C29.4276 18.3743 24.4789 24.826 20.1411 28.817C16.9934 31.7277 12.0134 31.7277 8.85007 28.817C4.52786 24.826 -0.420761 18.3593 1.38016 10.7374Z'
        fill={color}
      />
      <Path
        data-name='Trazado 1232'
        d='M14.5037 18.1485C17.2021 18.1485 19.3896 16.0526 19.3896 13.4673C19.3896 10.882 17.2021 8.78613 14.5037 8.78613C11.8052 8.78613 9.61768 10.882 9.61768 13.4673C9.61768 16.0526 11.8052 18.1485 14.5037 18.1485Z'
        fill={'white'}
      />
    </Svg>
  )
}
