import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const PasswordIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg width={size - 3} height={size}>
      <G data-name="Grupo 106" fill={color}>
        <Path
          data-name="Trazado 182"
          d="M2.868 19.083h9.761a2.838 2.838 0 002.868-2.833V9.911a2.806 2.806 0 00-2.081-2.741v-2A5.129 5.129 0 008.327 0H7.17a5.22 5.22 0 00-5.2 5.17v2A2.841 2.841 0 00.004 9.911v6.338a2.838 2.838 0 002.864 2.834zm4.3-17.695h1.157a3.737 3.737 0 013.7 3.782v1.885H3.354V5.17A3.836 3.836 0 017.17 1.388zm6.939 14.827a1.476 1.476 0 01-1.48 1.48H2.868a1.476 1.476 0 01-1.48-1.48V9.923a1.476 1.476 0 011.48-1.48h9.761a1.476 1.476 0 011.48 1.48v6.291z"
        />
        <Path
          data-name="Trazado 183"
          d="M7.517 15.96a.7.7 0 00.694-.694v-2.2a.694.694 0 10-1.388 0v2.2a.7.7 0 00.694.694z"
        />
      </G>
    </Svg>
  );
};
