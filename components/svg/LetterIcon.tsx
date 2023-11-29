import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
};

export const LetterIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg x="0" y="0" height={size} width={size} viewBox="0 0 42.05 39.28">
      <G transform="translate(2.045 1.313)">
        <Path
          fill={color}
          stroke={color}
          d="M31.48 9.07a.97.97 0 00-.97-.97H7.45a.97.97 0 00-.97.97v18.51c0 .54.44.97.97.97H30.5c.54 0 .97-.44.97-.97V9.07zM8.43 26.61V15.06l9.79 8.42c.17.15.39.23.62.23.24 0 .47-.08.67-.23l10.03-8.39V26.6l-21.11.01zm21.1-16.56v2.52c-.16.02-.08.03-.1.03l-10.58 8.88-10.39-8.93c-.02-.02-.03-.03-.03-.05v-2.45h21.1z"
        />
      </G>
    </Svg>
  );
};
