import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const ChatIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg data-name="Grupo 1917" width={size} height={size}>
      <G data-name="Grupo 110">
        <Path
          data-name="Trazado 195"
          d="M14.868 0C6.663 0 0 5.228 0 11.642a10.694 10.694 0 004.873 8.633l-1.063 6.04a1.039 1.039 0 00.425 1.046.993.993 0 00.62.195.94.94 0 00.5-.124l7.85-4.217c.567.053 1.116.071 1.666.071 8.2 0 14.868-5.228 14.868-11.642S23.072 0 14.868 0zm0 21.141c-.567 0-1.17-.035-1.772-.089a1.09 1.09 0 00-.62.124l-6.2 3.331.8-4.554a1.053 1.053 0 00-.484-1.078c-2.853-1.825-4.483-4.448-4.483-7.23 0-5.245 5.724-9.516 12.741-9.516S27.591 6.4 27.591 11.645s-5.706 9.496-12.723 9.496z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
