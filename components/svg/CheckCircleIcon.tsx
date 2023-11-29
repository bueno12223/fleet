import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

type Props = {
  background?: string;
  color?: string;
  size?: number;
};

export const CheckCircleIcon: React.FC<Props> = ({
  background = 'blue',
  color = 'white',
  size = 20,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path fill={'none'} d="M0 0H256V256H0z" />
      <Circle
        cx="128"
        cy="128"
        r="96"
        fill={background}
        stroke={background}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        fill={background}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M172 104L113.3 160 84 132"
      />
    </Svg>
  );
};
