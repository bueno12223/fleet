import React from 'react';
import Svg, { Path, Circle, Rect } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const ImageIcon: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Rect
        width="192"
        height="160"
        x="32"
        y="48"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        rx="8"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M32 168l50.3-50.3a8 8 0 0111.4 0l44.6 44.6a8 8 0 0011.4 0l20.6-20.6a8 8 0 0111.4 0L224 184"
      />
      <Circle cx="156" cy="100" r="12" />
    </Svg>
  );
};
