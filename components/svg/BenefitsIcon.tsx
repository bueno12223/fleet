import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const BenefitsIcon: React.FC<Props> = ({
  color = colors.background,
  size = 28,
}) => {
  return (
    <Svg data-name='Grupo 1935' width={size} height={size}>
      <Path
        data-name='Trazado 23'
        d='M27.871 9.746l-9.049-.764L15.299.614A1 1 0 0014.386 0a.971.971 0 00-.913.614l-3.52 8.368-9.049.764a.982.982 0 00-.863.681 1.023 1.023 0 00.3 1.063l6.858 5.927-2.058 8.833a.994.994 0 001.478 1.079l7.77-4.7 7.77 4.7a.973.973 0 00.515.149 1.046 1.046 0 00.581-.183.965.965 0 00.382-1.029l-2.059-8.833 6.857-5.927a1.023 1.023 0 00.3-1.063.976.976 0 00-.864-.697zm-8.053 6.575a.993.993 0 00-.315.98l1.66 7.123-6.264-3.786a.973.973 0 00-.515-.149.932.932 0 00-.515.149l-6.254 3.785 1.66-7.123a.993.993 0 00-.315-.98l-5.529-4.781 7.289-.614a.993.993 0 00.83-.6l2.839-6.755 2.839 6.741a.956.956 0 00.83.6l7.289.614z'
        fill={color}
      />
    </Svg>
  )
}
