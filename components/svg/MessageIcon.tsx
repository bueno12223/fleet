import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const MessageIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg data-name="Grupo 1918" width={size} height={size}>
      <G data-name="Grupo 93">
        <Path
          data-name="Trazado 167"
          d="M27.563 1.074A1.077 1.077 0 0026.489 0H1.074A1.077 1.077 0 000 1.074v20.4a1.077 1.077 0 001.074 1.074h25.415a1.077 1.077 0 001.074-1.074zM2.148 20.403V7.678l10.792 9.289a.974.974 0 00.68.251 1.252 1.252 0 00.734-.251l11.061-9.253v12.689zM25.415 2.148v2.774c-.179.018-.09.036-.107.036l-11.669 9.79L2.184 4.904c-.018-.018-.036-.036-.036-.054v-2.7z"
          fill={color}
        />
      </G>
    </Svg>
  );
};
