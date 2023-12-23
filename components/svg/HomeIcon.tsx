import * as React from 'react'
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg'
import { colors } from 'styles/theme'

type Props = {
  color?: string;
  size?: number;
};

export const HomeIcon = ({ color = colors.primary, size = 24,  ...props}: Props & SvgProps) => (
  <Svg
    width={size} 
    height={size + 2}
    fill={color}
    {...props}
  >
    <G clipPath='url(#a)'>
      <Path
        fill={color}
        d='M15 22v-5a3 3 0 0 0-6 0v5H4a2 2 0 0 1-2-2V9.3a2 2 0 0 1 1-1.7l8-4.8a2 2 0 0 1 2 0l8 4.8a2 2 0 0 1 1 1.7v10.9a2 2 0 0 1-2 2h-5Z'
      />
    </G>
    <Defs>
      <ClipPath id='a'>
        <Path fill='#fff' d='M0 0h24v24H0z' />
      </ClipPath>
    </Defs>
  </Svg>
)
