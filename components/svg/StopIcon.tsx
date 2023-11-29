import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const StopIcon: React.FC<Props> = ({ color = colors.background, size = 20 }) => {
  return (
    <Svg width={size} height={size}>
      <G data-name="Grupo 1902">
        <Path
          data-name="Trazado 90"
          d="M9.5 0A9.5 9.5 0 1019 9.5 9.508 9.508 0 009.5 0zm0 17.706A8.206 8.206 0 1117.706 9.5 8.21 8.21 0 019.5 17.706z"
          fill={color}
        />
        <G data-name="Trazado 1234" fill="none">
          <Path d="M6.141 5.02h6.719a1.12 1.12 0 011.12 1.12v6.719a1.12 1.12 0 01-1.12 1.12H6.141a1.12 1.12 0 01-1.12-1.12V6.14a1.12 1.12 0 011.12-1.12z" />
          <Path
            d="M6.521 6.52v5.96h5.96V6.52H6.52m-.38-1.5h6.72c.618 0 1.12.501 1.12 1.12v6.72a1.12 1.12 0 01-1.12 1.12H6.14a1.12 1.12 0 01-1.12-1.12V6.14c0-.619.501-1.12 1.12-1.12z"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};
