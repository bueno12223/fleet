import React from 'react';
import Svg, { G, Path, Circle } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  secondaryColor?: string;
  size?: number;
};

export const JobsInviteIcon: React.FC<Props> = ({
  color = colors.primary,
  secondaryColor = colors.primary,
  size = 25,
}) => {
  return (
    <Svg width={size * 1.5} height={size} viewBox="0 0 32.718 24.77">
      <G data-name="Grupo 2081" transform="translate(-300.719 -713.219)">
        <G
          data-name="4177630_briefcase_job_suitcase_work_icon"
          transform="translate(308.437 716.56)"
        >
          <Path
            id="Trazado_1232"
            data-name="Trazado 1232"
            fill={color}
            d="M25.214,7.571h-6.25V5.786A1.786,1.786,0,0,0,17.179,4H11.821a1.786,1.786,0,0,0-1.786,1.786V7.571H3.786A1.786,1.786,0,0,0,2,9.357V23.643a1.786,1.786,0,0,0,1.786,1.786H25.214A1.786,1.786,0,0,0,27,23.643V9.357A1.786,1.786,0,0,0,25.214,7.571ZM11.821,5.786h5.357V7.571H11.821ZM25.214,9.357v8.036H3.786V9.357ZM3.786,23.643V19.179H25.214v4.464Z"
            transform="translate(-2 -4)"
          />
          <Path
            id="Trazado_1233"
            data-name="Trazado 1233"
            fill={color}
            d="M14.893,17.786h1.786a.893.893,0,1,0,0-1.786H14.893a.893.893,0,1,0,0,1.786Z"
            transform="translate(-3.286 -5.286)"
          />
        </G>
        <G id="Grupo_1973" data-name="Grupo 1973" transform="translate(75.904 0)">
          <Circle
            id="Elipse_266"
            data-name="Elipse 266"
            fill={secondaryColor}
            cx="6.5"
            cy="6.5"
            r="6.5"
            transform="translate(225.096 713.5)"
          />
        </G>
        <G id="Grupo_1974" data-name="Grupo 1974" transform="translate(300.719 713.219)">
          <Path
            id="Trazado_68"
            data-name="Trazado 68"
            fill={color}
            d="M88.572,92.9h3.413v3.413a.455.455,0,0,0,.91,0V92.9h3.413a.455.455,0,0,0,0-.91H92.9V88.572a.455.455,0,1,0-.91,0v3.413H88.572a.455.455,0,0,0,0,.91Z"
            transform="translate(-85.758 -85.758)"
          />
          <Path
            id="Trazado_69"
            data-name="Trazado 69"
            fill={color}
            d="M6.682,13.364A6.682,6.682,0,1,0,0,6.682,6.688,6.688,0,0,0,6.682,13.364ZM6.682.91A5.772,5.772,0,1,1,.91,6.682,5.775,5.775,0,0,1,6.682.91Z"
            transform="translate(0 0)"
          />
        </G>
      </G>
    </Svg>
  );
};
