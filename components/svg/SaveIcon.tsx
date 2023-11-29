import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const SaveIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg width={size} height={size}>
      <Path
        data-name="Trazado 162"
        d="M11.734 0H.593A.594.594 0 000 .593v14.322a.594.594 0 00.593.593h13.824a.594.594 0 00.593-.593V4.04a.57.57 0 00-.128-.365L12.199.227A.6.6 0 0011.734 0zm-7.19 1.185h6.223v5.828H4.544zm9.285 13.137H1.185V1.185h2.173v6.43a.546.546 0 00.543.583h7.487a.561.561 0 00.563-.583V1.877l1.877 2.371v10.074z"
        fill={color}
      />
      <Path
        data-name="Trazado 163"
        d="M9.384 2.865a.594.594 0 00-.593-.593H8.1a.594.594 0 00-.593.593v2.37a.594.594 0 00.593.593h.691a.594.594 0 00.593-.593z"
        fill={color}
      />
    </Svg>
  );
};
