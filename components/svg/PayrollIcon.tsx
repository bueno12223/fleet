import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const PayrollIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg
      data-name="1737376_dollar_money_sign_icon"
      width={size}
      height={size}
      viewBox="0 0 24.873 24.873"
    >
      <Path
        data-name="Trazado 1237"
        d="M12.436 0a12.436 12.436 0 1012.437 12.437A12.45 12.45 0 0012.436 0zm0 22.911a10.475 10.475 0 1110.475-10.474 10.486 10.486 0 01-10.475 10.474z"
        fill={color}
      />
      <Path
        data-name="Trazado 1238"
        d="M10.469 9.999c0-.787 1.151-.921 2.149-.921a8.078 8.078 0 013.3 1l.211-2.169a8.141 8.141 0 00-3.051-.748l.307-2.207h-2.053l.307 2.207c-2.648.249-3.512 1.784-3.512 3.07 0 3.243 6.044 2.553 6.044 4.548 0 .749-.709 1.017-1.957 1.017a5.342 5.342 0 01-3.607-1.209l-.326 2.436a8.138 8.138 0 003.359.768l-.307 2.13h2.055l-.307-2.15c3.109-.269 3.665-1.919 3.665-3.013-.002-3.857-6.277-2.898-6.277-4.759z"
        fill={color}
      />
    </Svg>
  );
};
