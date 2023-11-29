import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const CaretDownIcon: React.FC<Props> = ({
  color = colors.primary,
  size = 15,
}) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <Svg width={size} height={size} fill={color} viewBox="0 0 16 16" style={{ marginLeft: '5%' }}>
      <Path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
    </Svg>
  );
};
