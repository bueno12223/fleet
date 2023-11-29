import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  background?: string;
  size?: number;
  colorCircle?: string;
};

export const ClockOutlineIcon: React.FC<Props> = ({
  color = colors.background,
  size = 20,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Path
        d="M22 12c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M15.71 15.18l-3.1-1.85c-.54-.32-.98-1.09-.98-1.72v-4.1"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
