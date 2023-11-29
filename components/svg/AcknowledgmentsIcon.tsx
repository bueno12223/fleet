import React from 'react';
import Svg, { Circle, G, Path } from 'react-native-svg';

type Props = {
  size?: number;
};

export const AcknowledgmentsIcon: React.FC<Props> = ({ size = 28 }) => {
  return (
    <Svg viewBox="0 0 24 24" fill="#2A3A91" height={size} width={size}>
      <G
        fill="none"
        stroke="#2A3A91"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.512}
      >
        <Path d="M12 8L12 12" />
        <Path d="M12 16L12 16" />
        <Circle cx={12} cy={12} data-name="--Circle" r={10} />
      </G>
    </Svg>
  );
};
