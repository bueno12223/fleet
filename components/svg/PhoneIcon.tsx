import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const PhoneIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg width={size} height={size}>
      <G data-name='Grupo 16'>
        <Path
          data-name='Trazado 26'
          d='M1.138 1.494a1.172 1.172 0 00-.1.122l-.376.608c-.011.022-.033.055-.044.077a7.351 7.351 0 00-.619 2.974 6.228 6.228 0 001.736 4.467l5.738 5.738a6.769 6.769 0 007.419 1.072.447.447 0 00.1-.055l.586-.39c.033-.022.066-.055.1-.077l1.025-1.023a1.692 1.692 0 00.5-1.2 1.557 1.557 0 00-.453-1.095l-2.986-2.981a1.625 1.625 0 00-2.3.033l-1.171 1.172-3.99-3.991 1.193-1.194a1.5 1.5 0 00.486-1.139 1.618 1.618 0 00-.464-1.128L4.533.499a1.765 1.765 0 00-1.15-.5 1.6 1.6 0 00-1.205.453zm2.455-.055l2.985 2.985a.285.285 0 01-.022.409L4.898 6.491a.674.674 0 000 .94l4.92 4.92a.683.683 0 00.464.2.636.636 0 00.464-.2l1.657-1.636a.313.313 0 01.431-.033l2.987 2.985a.2.2 0 01.066.155.381.381 0 01-.111.254l-.973.973-.486.321a5.381 5.381 0 01-5.882-.818l-5.76-5.738a4.918 4.918 0 01-1.349-3.538 5.989 5.989 0 01.487-2.389l.31-.509.98-.983a.291.291 0 01.21-.066.523.523 0 01.28.11z'
          fill={color}
        />
      </G>
    </Svg>
  )
}