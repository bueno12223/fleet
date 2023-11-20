declare module '*.svg' {
  import React from 'react'
  import { SvgProps } from 'react-native-svg'
  const content: React.FC<SvgProps>
  export default content
}

declare module 'react-native-animated-loader' {
  import { Component } from 'react'
  import { ViewStyle } from 'react-native'

  interface AnimatedLoaderProps {
    visible?: boolean;
    overlayColor?: string;
    animationType?: 'none' | 'slide' | 'fade';
    source?: object;
    animationStyle?: ViewStyle;
    speed?: number;
    loop?: boolean;
  }

  export default class AnimatedLoader extends Component<AnimatedLoaderProps> {}
}