import React from 'react'
import Svg, { Path } from 'react-native-svg'
import { colors } from 'styles/theme'

import { StyleProp, View, ViewStyle } from 'react-native'

type Props = {
  rotation?: number;
  rotationZ?: number;
  color?: string;
  size?: number;
  containerStyle?: StyleProp<ViewStyle>;
};

export const ArrowIcon: React.FC<Props> = ({
  rotation = 0,
  rotationZ = 0,
  color = colors.background,
  size = 20,
  containerStyle,
}) => {
  return (
    <View style={[containerStyle]}>
      <Svg
        width={size}
        height={size}
        style={[
          {
            transform: [{ rotateY: `${rotation}deg` }, { rotateZ: `${rotationZ}deg` }],
          },
        ]}
      >
        <Path
          d='M14.749 9.37L7.02 2.02a1.506 1.506 0 00-1.6-.207 1.009 1.009 0 00-.163 1.376l7.121 6.767-7.116 6.767a.908.908 0 00.162 1.41 1.248 1.248 0 001.6-.24l7.726-7.36a.8.8 0 00-.001-1.163z'
          fill={color}
        />
      </Svg>
    </View>
  )
}
