import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
const CategoriesIcons = (props: SvgProps) => (
  <Svg
    width={props.width ?? 24}
    height={props.height ?? 24}
    fill='none'
    {...props}
  >
    <Path
      fill={props.color ?? '#fff'}
      d='M4.8 7v2c0 .4-.3.7-.7.7H1.3a.6.6 0 0 1-.6-.6V6.9c0-.3.3-.6.6-.6h2.8c.4 0 .7.3.7.6ZM.7 11.1v2.2c0 .3.3.6.6.6h2.8c.4 0 .7-.3.7-.6v-2.2c0-.3-.3-.6-.7-.6H1.3c-.3 0-.6.3-.6.6ZM4 2H1.3c-.3 0-.6.3-.6.6v2.2c0 .3.3.6.6.6h2.8c.4 0 .7-.3.7-.6V2.6c0-.3-.3-.6-.7-.6Zm2.2 12H14c.4 0 .7-.3.7-.6v-2.2c0-.3-.3-.6-.7-.6H6.3c-.4 0-.7.3-.7.6v2.2c0 .3.3.6.7.6ZM5.6 2.6v2.2c0 .3.3.6.7.6H14c.4 0 .7-.3.7-.6V2.6c0-.3-.3-.6-.7-.6H6.3c-.4 0-.7.3-.7.6Zm.7 7.1H14c.4 0 .7-.3.7-.6V6.9c0-.3-.3-.6-.7-.6H6.3c-.4 0-.7.3-.7.6v2.2c0 .3.3.6.7.6Z'
    />
  </Svg>
)
export default CategoriesIcons
