import * as React from 'react'
import Svg, { SvgProps, Path } from 'react-native-svg'
export const FilterIcon = (props: SvgProps) => (
  <Svg
    width={props.width ?? 20}
    height={props.height ?? 15}
    fill='none'
    {...props}
  >
    <Path
      fill={props.color ?? '#FFF'}
      d='M9.4 12.3H7.5l-.3.1-.1.3v.9l.1.3.3.1h1.9l.3-.1.1-.3v-.9l-.1-.3-.3-.1Zm-3.7-1.7H4.3V2.4l-.1-.3-.3-.1h-1l-.3.1-.1.3v8.2H1.1c-.4 0-.6.4-.3.7l2.3 2.6.3.1.3-.1L6 11.3c.3-.3.1-.7-.3-.7ZM13 5.4H7.5s-.2 0-.3.2l-.1.3v.8l.1.3.3.1h5.9l.1-.4V6l-.1-.3-.4-.2ZM11.2 9h-4l-.1.4v.8l.1.3.3.2h3.7c.1 0 .2 0 .3-.2.1 0 .2-.1.2-.3v-.8c0-.1 0-.2-.2-.3l-.3-.1ZM15 2H7.5l-.3.1-.1.3v.9l.1.3.3.1H15l.3-.1.1-.3v-.9l-.1-.3L15 2Z'
    />
  </Svg>
)
