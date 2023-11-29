import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  background?: string;
  size?: number;
  colorCircle?: string;
};

export const ClockIcon: React.FC<Props> = ({
  color = colors.background,
  size = 28,
  background = 'white',
  colorCircle = colors.background,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Circle
        cx="128"
        cy="128"
        r="96"
        fill={background}
        stroke={colorCircle}
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
        d="M128 72L128 128 184 128"
      />
    </Svg>
  );
};
