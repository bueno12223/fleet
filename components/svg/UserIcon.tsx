import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const UserIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg width={size} height={size + 2}>
      <G data-name="Grupo 45">
        <Path
          data-name="Trazado 75"
          d="M0 18.31a.775.775 0 00.773.773H13.89a.775.775 0 00.773-.773c0-4.278-1.933-7.95-4.651-9.419a4.851 4.851 0 10-5.347 0C1.933 10.359 0 14.032 0 18.31zM7.332 1.546a3.3 3.3 0 11-3.3 3.3 3.3 3.3 0 013.3-3.3zm0 8.182c3.015 0 5.489 3.44 5.76 7.808H1.572c.271-4.368 2.744-7.808 5.76-7.808z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
