import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const ShareIcon: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx="64"
        cy="128"
        r="32"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Circle
        cx="176"
        cy="200"
        r="32"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Circle
        cx="176"
        cy="56"
        r="32"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M149.1 73.3L90.9 110.7"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M90.9 145.3L149.1 182.7"
      />
    </Svg>
  );
};
