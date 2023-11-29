import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const JobsIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg
      data-name='4177630_briefcase_job_suitcase_work_icon'
      width={size}
      height={size}
      viewBox='0 0 25 21.429'
    >
      <Path
        data-name='Trazado 1232'
        d='M23.214 3.571h-6.25V1.786A1.786 1.786 0 0015.179 0H9.821a1.786 1.786 0 00-1.786 1.786v1.785H1.786A1.786 1.786 0 000 5.357v14.286a1.786 1.786 0 001.786 1.786h21.428A1.786 1.786 0 0025 19.643V5.357a1.786 1.786 0 00-1.786-1.786zM9.821 1.786h5.357v1.785H9.821zm13.393 3.571v8.036H1.786V5.357zM1.786 19.643v-4.464h21.428v4.464z'
        fill={color}
      />
      <Path
        data-name='Trazado 1233'
        d='M11.607 12.5h1.786a.893.893 0 100-1.786h-1.786a.893.893 0 100 1.786z'
        fill={color}
      />
    </Svg>
  )
}
