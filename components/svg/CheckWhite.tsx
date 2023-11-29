import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const CheckWhite: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg data-name="Grupo 1917" width={size} height={size}>
      <Path
        fill={color}
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      />
    </Svg>
  );
};
