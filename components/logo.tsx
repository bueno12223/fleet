import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 59 59"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0_3217_2146)">
        <Path d="M64.9-5.9H-5.9v70.8h70.8V-5.9z" fill="#fff" />
        <Path d="M64.9-5.9H-5.9v70.8h70.8V-5.9z" fill="#fff" />
        <Path d="M64.9-5.9H-5.9v70.8h70.8V-5.9z" fill="#fff" />
        <Path d="M64.9-5.9H-5.9v70.8h70.8V-5.9z" fill="#216869" />
        <Path
          d="M11.176 29.39l16.9-16.906V3.34c-9.892.73-17.693 8.983-17.693 19.065 0 .982.075 1.947.218 2.889.069 1.37.274 2.738.575 4.094z"
          fill="#1F2421"
        />
        <Path
          d="M28.076 16.513L12.057 32.537c1.023 3.023 2.495 5.946 4.158 8.657L28.076 29.33V16.513z"
          fill="#49A078"
        />
        <Path
          d="M28.076 33.358L17.798 43.64c3.8 5.562 8.102 9.952 10.278 12.03V33.358z"
          fill="#1F2421"
        />
        <Path
          d="M30.924 3.341V55.67c4.277-4.087 16.806-17.138 17.474-30.374.143-.942.218-1.907.218-2.889 0-10.082-7.8-18.335-17.692-19.065z"
          fill="#DCE1DE"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0_3217_2146">
          <Path fill="#fff" d="M0 0h59v59H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default SvgComponent
