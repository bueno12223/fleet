import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const TrashIcon: React.FC<Props> = ({ color = colors.primary, size = 20 }) => {
  return (
    <Svg data-name="Grupo 1917" width={size} height={size} fill={color} viewBox="0 0 256 256">
      <Path fill="none" d="M0 0H256V256H0z" />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M216 56L40 56"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M104 104L104 168"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M152 104L152 168"
      />
      <Path
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
        d="M200 56v152a8 8 0 01-8 8H64a8 8 0 01-8-8V56M168 56V40a16 16 0 00-16-16h-48a16 16 0 00-16 16v16"
      />
    </Svg>
  );
};
