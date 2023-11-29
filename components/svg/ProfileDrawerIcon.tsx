import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const ProfileDrawerIcon: React.FC<Props> = ({
  color = colors.background,
  size = 50,
}) => {
  return (
    <Svg width={size} height={size}>
      <G data-name="Grupo 1914">
        <G data-name="Grupo 45">
          <Path
            data-name="Trazado 75"
            d="M15.136 41.191a1.276 1.276 0 001.272 1.272h21.578a1.276 1.276 0 001.272-1.272c0-7.037-3.18-13.079-7.652-15.495a7.981 7.981 0 10-8.8 0c-4.49 2.416-7.67 8.457-7.67 15.495zm12.061-27.577a5.426 5.426 0 11-5.426 5.426 5.437 5.437 0 015.426-5.426zm0 13.46c4.96 0 9.03 5.66 9.475 12.845h-18.95c.445-7.186 4.515-12.849 9.475-12.849z"
            fill={color}
          />
        </G>
        <G data-name="Grupo 1913">
          <Path
            data-name="Trazado 81"
            d="M27 .5A26.5 26.5 0 1053.5 27 26.522 26.522 0 0027 .5zm0 49.39A22.89 22.89 0 1149.89 27 22.9 22.9 0 0127 49.89z"
            fill={color}
          />
        </G>
      </G>
    </Svg>
  );
};
