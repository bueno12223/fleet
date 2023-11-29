import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const ProfileIcon: React.FC<Props> = ({
  color = colors.background,
  size = 32,
}) => {
  return (
    <Svg data-name="Grupo 1943" width={size} height={size}>
      <G data-name="Grupo 45">
        <Path
          data-name="Trazado 75"
          d="M8.32 24.511a.827.827 0 00.824.824h13.984a.827.827 0 00.824-.824c0-4.56-2.06-8.475-4.959-10.041a5.172 5.172 0 10-5.7 0C10.38 16.036 8.32 19.95 8.32 24.511zm7.816-17.87a3.516 3.516 0 11-3.516 3.516 3.523 3.523 0 013.516-3.517zm0 8.722c3.214 0 5.851 3.667 6.14 8.324H9.996c.288-4.657 2.925-8.324 6.14-8.324z"
          fill={color}
        />
      </G>
      <G data-name="Grupo 1936">
        <Path
          data-name="Trazado 81"
          d="M15.807 0a15.807 15.807 0 1015.808 15.807A15.82 15.82 0 0015.807 0zm0 29.461a13.654 13.654 0 1113.654-13.654 13.661 13.661 0 01-13.654 13.654z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
