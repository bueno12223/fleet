import React from 'react'
import Svg, { G, Path, Circle } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  secondaryColor?: string;
  size?: number;
};

export const JobsPendingIcon: React.FC<Props> = ({
  color = colors.primary,
  secondaryColor = colors.background,
  size = 25,
}) => {
  return (
    <Svg width={size * 1.5} height={size} viewBox='0 0 32.533 24.489'>
      <G data-name='Grupo 2082' transform='translate(-173.904 -713.5)'>
        <G data-name='Grupo 2080'>
          <G
            data-name='4177630_briefcase_job_suitcase_work_icon'
            transform='translate(181.437 716.56)'
          >
            <Path
              id='Trazado_1232'
              data-name='Trazado 1232'
              fill={color}
              d='M25.214,7.571h-6.25V5.786A1.786,1.786,0,0,0,17.179,4H11.821a1.786,1.786,0,0,0-1.786,1.786V7.571H3.786A1.786,1.786,0,0,0,2,9.357V23.643a1.786,1.786,0,0,0,1.786,1.786H25.214A1.786,1.786,0,0,0,27,23.643V9.357A1.786,1.786,0,0,0,25.214,7.571ZM11.821,5.786h5.357V7.571H11.821ZM25.214,9.357v8.036H3.786V9.357ZM3.786,23.643V19.179H25.214v4.464Z'
              transform='translate(-2 -4)'
            />
            <Path
              id='Trazado_1233'
              data-name='Trazado 1233'
              fill={color}
              d='M14.893,17.786h1.786a.893.893,0,1,0,0-1.786H14.893a.893.893,0,1,0,0,1.786Z'
              transform='translate(-3.286 -5.286)'
            />
          </G>
          <G data-name='Grupo 1963' transform='translate(-51.096 0)'>
            <Circle
              data-name='Elipse 266'
              fill={secondaryColor}
              cx='6.5'
              cy='6.5'
              r='6.5'
              transform='translate(225.096 713.5)'
            />
            <G id='circular-wall-clock' transform='translate(225 713.845)'>
              <G data-name='Grupo 92'>
                <Path
                  data-name='Trazado 165'
                  fill={color}
                  d='M6.715,13.43A6.715,6.715,0,1,0,0,6.715,6.719,6.719,0,0,0,6.715,13.43Zm0-12.374A5.659,5.659,0,1,1,1.056,6.715,5.666,5.666,0,0,1,6.715,1.056Z'
                />
                <Path
                  data-name='Trazado 166'
                  fill={color}
                  d='M182.385,102l2.262,1.76a.563.563,0,0,0,.326.114.513.513,0,0,0,.414-.2.523.523,0,0,0-.1-.739l-2.051-1.6V97.711a.528.528,0,1,0-1.056,0v3.872A.526.526,0,0,0,182.385,102Z'
                  transform='translate(-176.524 -94.164)'
                />
              </G>
            </G>
          </G>
        </G>
      </G>
    </Svg>
  )
}
