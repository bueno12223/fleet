import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'

type Props = {
  color?: string;
  size?: number;
};

export const SideMenuIcon: React.FC<Props> = ({
  color = colors.background,
  size = 15,
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 16 14'>
      <Path data-name='Uni\xF3n 4' d='M0 14v-2h8v2zm0-6V6h16v2zm0-6V0h16v2z' fill={color} />
    </Svg>
  )
}
