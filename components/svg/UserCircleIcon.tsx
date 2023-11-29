import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const UserCircleIcon: React.FC<Props> = ({
  color = colors.primary,
  size = 20,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Circle
        cx="128"
        cy="120"
        r="40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
        d="M63.8 199.4a72 72 0 01128.4 0"
      />
    </Svg>
  );
};
