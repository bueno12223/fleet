import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'


interface Props extends SvgProps {
  color?: string;
  size?: number;
};
  
const StarIcon = ({ color = '#FCDE76', size = 24, ...props }: Props) => (
  <Svg
    width={size}
    height={size}
    fill='none'
    {...props}
  >
    <Path
      fill={color}
      d='M9.5.9 7.2 5.6 2 6.3c-.9.1-1.2 1.3-.6 2l3.7 3.6-.9 5c-.1 1 .9 1.7 1.7 1.2l4.6-2.4 4.6 2.4c.8.5 1.8-.2 1.6-1.2l-.9-5 3.7-3.7c.7-.6.4-1.8-.6-1.9l-5.1-.7L11.5.9C11 0 9.9 0 9.5.9Z'
    />
  </Svg>
)
export default StarIcon
