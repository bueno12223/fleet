import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

const SearchIcon = ({ color = '#4F4F4F', size = 24, ...props }) => {
  return (
    <Svg
      width={size}
      height={size}
      viewBox='0 0 24 24'
      fill='none'
      {...props}
    >
      <G fill={color}>
        <Path
          fillRule='evenodd'
          d='M3 11.1a8.1 8.1 0 1 0 16.2 0 8.1 8.1 0 0 0-16.2 0Zm14.2 0a6.1 6.1 0 1 1-12.2 0 6.1 6.1 0 0 1 12.2 0Z'
          clipRule='evenodd'
        />
        <Path d='M20.7 19.3a1 1 0 0 1-1.4 1.4l-3.9-3.9a1 1 0 0 1 1.4-1.4l4 3.9Z' />
      </G>
    </Svg>
  )
}

export default SearchIcon
