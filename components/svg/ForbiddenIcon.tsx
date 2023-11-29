import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  background?: string;
  size?: number;
};

export const ForbiddenIcon: React.FC<Props> = ({
  color = colors.background,
  size = 20,
  background = colors.primary,
}) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx="128"
        cy="128"
        r="110"
        fill={background}
        stroke={background}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle
        cx="128"
        cy="128"
        r="55"
        fill={background}
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <Path
        fill={background}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M99.7 99.7L156.3 156.3"
      />
    </Svg>
  );
};
