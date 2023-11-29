import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const EmailIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg width={size} height={size - 3}>
      <G data-name="Grupo 93">
        <Path
          data-name="Trazado 167"
          d="M17.189.67a.672.672 0 00-.67-.67H.67A.672.672 0 000 .67v12.724a.672.672 0 00.67.67h15.849a.672.672 0 00.67-.67zM1.339 12.724V4.788l6.73 5.793a.607.607 0 00.424.156.781.781 0 00.458-.156l6.9-5.77v7.913zm14.51-11.385v1.73c-.112.011-.056.022-.067.022L8.5 9.197 1.362 3.058c-.011-.011-.022-.022-.022-.033V1.339z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
