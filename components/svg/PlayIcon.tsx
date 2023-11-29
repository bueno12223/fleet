import React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  color?: string;
  background?: string;
  size?: number;
};

export const PlayIcon: React.FC<Props> = ({ color = 'white', size = 20, background = 'none' }) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        fill={background}
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="50"
        d="M228.1 121.2l-143.9-88A8 8 0 0072 40v176a8 8 0 0012.2 6.8l143.9-88a7.9 7.9 0 000-13.6z"
      />
    </Svg>
  );
};
