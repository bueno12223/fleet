import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const LinkIcon: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M122.3 71.4l19.8-19.8a44.1 44.1 0 0162.3 62.3l-28.3 28.2a43.9 43.9 0 01-62.2 0"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M133.7 184.6l-19.8 19.8a44.1 44.1 0 01-62.3-62.3l28.3-28.2a43.9 43.9 0 0162.2 0"
      />
    </Svg>
  );
};
