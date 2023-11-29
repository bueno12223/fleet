import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const StartIcon: React.FC<Props> = ({ color = colors.background, size = 20 }) => {
  return (
    <Svg width={size} height={size}>
      <G data-name="Grupo 50" fill={color}>
        <Path
          data-name="Trazado 89"
          d="M14.078 8.632L6.612 4.321a.611.611 0 00-.625 0 .625.625 0 00-.312.541v8.612a.625.625 0 00.312.541.627.627 0 00.625 0l7.456-4.311a.622.622 0 00.01-1.073zm-7.154 3.77V5.946l5.581 3.228z"
        />
        <Path
          data-name="Trazado 90"
          d="M9.174 0a9.174 9.174 0 109.174 9.174A9.182 9.182 0 009.174 0zm0 17.1A7.924 7.924 0 1117.1 9.174 7.928 7.928 0 019.174 17.1z"
        />
      </G>
    </Svg>
  );
};
