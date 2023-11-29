import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const PlusCircleIcon: React.FC<Props> = ({
  color = colors.primary,
  size = 20,
}) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M88 128L168 128"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M128 88L128 168"
      />
    </Svg>
  );
};
