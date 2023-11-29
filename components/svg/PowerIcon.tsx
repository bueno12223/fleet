import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const PowerIcon: React.FC<Props> = ({ color = colors.background, size = 32 }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 16.633 18.747">
      <G data-name="Grupo 40" fill={color}>
        <Path
          data-name="Trazado 70"
          d="M4.671 4.696a.76.76 0 10-.823-1.279A8.315 8.315 0 1013 3.556a.757.757 0 10-.848 1.253 6.8 6.8 0 11-10.62 5.62 6.712 6.712 0 013.139-5.733z"
        />
        <Path
          data-name="Trazado 71"
          d="M9.076 11.139V.76a.76.76 0 00-1.519 0v10.38a.76.76 0 001.519 0z"
        />
      </G>
    </Svg>
  );
};
