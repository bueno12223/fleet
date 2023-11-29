import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const UploadIcon: React.FC<Props> = ({
  color = colors.background,
  size = 28,
}) => {
  return (
    <Svg width={size} height={size} viewBox='0 0 23.158 29.553'>
      <G data-name='Grupo 1924' fill={color}>
        <Path
          data-name='Trazado 47'
          d='M22.038 11.52h-4.821a1.139 1.139 0 000 2.278h3.664v13.477H2.273V13.798h4.043a1.139 1.139 0 000-2.278h-5.2a1.177 1.177 0 00-1.12 1.2v15.793a1.048 1.048 0 001.12 1.044h20.922a1.049 1.049 0 001.12-1.044V12.716a1.177 1.177 0 00-1.12-1.196z'
        />
        <Path
          data-name='Trazado 48'
          d='M11.39 20.062a1.142 1.142 0 001.139-1.139V3.491l4.859 4.328a1.143 1.143 0 101.519-1.708L12.358.283a1.146 1.146 0 00-1.462-.038 1.146 1.146 0 00-.494.456L4.726 6.149A1.141 1.141 0 006.302 7.8L10.251 4v14.92a1.143 1.143 0 001.139 1.142z'
        />
      </G>
    </Svg>
  )
}
