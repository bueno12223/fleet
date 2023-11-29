import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const TrainingIcon: React.FC<Props> = ({
  color = colors.background,
  size = 30,
}) => {
  return (
    <Svg width={size} height={size}>
      <G data-name="Grupo 72" fill={color}>
        <Path
          data-name="Trazado 138"
          d="M14.72 21.395a1.086 1.086 0 00-1.082 1.082v.722a1.083 1.083 0 102.165 0v-.722a1.085 1.085 0 00-1.083-1.082z"
        />
        <Path
          data-name="Trazado 139"
          d="M15.081 30.162A15.081 15.081 0 100 15.081a15.1 15.1 0 0015.081 15.081zm0-28A12.916 12.916 0 112.165 15.081 12.926 12.926 0 0115.081 2.165z"
        />
        <Path
          data-name="Trazado 140"
          d="M10.39 12.375a1.055 1.055 0 001.082-1.046 4.411 4.411 0 01.451-1.714 2.95 2.95 0 012.9-1.624 3.409 3.409 0 012.832 1.064 2.552 2.552 0 01.361 2.237 7.2 7.2 0 01-2.075 2.886c-1.082 1.118-2.219 2.255-2.219 3.788a1.083 1.083 0 102.165 0c0-.649.776-1.443 1.606-2.273a8.868 8.868 0 002.616-3.86 4.638 4.638 0 00-.74-4.095 5.373 5.373 0 00-4.526-1.911 5.007 5.007 0 00-4.835 2.814 6.647 6.647 0 00-.686 2.688 1.051 1.051 0 001.068 1.046z"
        />
      </G>
    </Svg>
  );
};
