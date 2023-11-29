import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const DashboardIcon: React.FC<Props> = ({
  color = colors.primary,
  size = 28,
}) => {
  return (
    <Svg width={size} height={size}>
      <G data-name="Grupo 64" fill={color}>
        <Path
          data-name="Trazado 119"
          d="M7.512.751A.753.753 0 006.761 0H.751A.753.753 0 000 .751v6.01a.753.753 0 00.751.751h6.01a.753.753 0 00.751-.751zM1.5 1.502h4.51V6.01H1.5z"
        />
        <Path
          data-name="Trazado 120"
          d="M18.029.751A.753.753 0 0017.278 0h-6.01a.753.753 0 00-.751.751v6.01a.753.753 0 00.751.751h6.01a.753.753 0 00.751-.751zm-6.01.751h4.507V6.01h-4.509z"
        />
        <Path
          data-name="Trazado 121"
          d="M7.512 11.018a.753.753 0 00-.751-.751H.751a.753.753 0 00-.751.751v6.01a.753.753 0 00.751.751h6.01a.753.753 0 00.751-.751zm-6.01.751H6.01v4.507H1.5z"
        />
        <Path
          data-name="Trazado 122"
          d="M18.029 11.018a.753.753 0 00-.751-.751h-6.01a.753.753 0 00-.751.751v6.01a.753.753 0 00.751.751h6.01a.753.753 0 00.751-.751zm-6.01.751h4.507v4.507h-4.509z"
        />
      </G>
    </Svg>
  );
};
