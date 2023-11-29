import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { colors } from 'styles/theme'
;

type Props = {
  color?: string;
  size?: number;
  round?: boolean;
};

export const InfoIcon: React.FC<Props> = ({
  color = colors.background,
  size = 20,
  round = false,
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      {!round && (
        <>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.4 6H11v2.4h2.4V6zm0 4.8H11V18h2.4v-7.2z"
            fill={color}
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22 2H2v20h20V2zm-2 2H4v16h16V4z"
            fill={color}
          />
        </>
      )}
      {round && (
        <>
          <Path
            d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
            fill={color}
          />
          <Circle cx="12" cy="8" r="1" />
          <Path d="M12,10a1,1,0,0,0-1,1v5a1,1,0,0,0,2,0V11A1,1,0,0,0,12,10Z" fill={color} />
        </>
      )}
    </Svg>
  );
};
