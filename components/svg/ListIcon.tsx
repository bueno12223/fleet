import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

export const ListIcon = ({ color = '#4F4F4F', size = 24, ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill='none'
      {...props}
    >
      <Path
        fill={color}
        d='M7 2h10a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3Zm1 7a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8Zm0 8a1 1 0 0 0 0 2h5a1 1 0 0 0 0-2H8ZM8 5a1 1 0 0 0 0 2h8a1 1 0 1 0 0-2H8Zm0 8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8Z'
      />
    </Svg>
  )
}

