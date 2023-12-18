import React from 'react'
import Svg, { G, Path } from 'react-native-svg'
import { colors } from 'styles/theme'


type Props = {
  color?: string;
  size?: number;
};

export const AddressIcon: React.FC<Props> = ({ color = colors.primary, size = 28 }) => {
  return (
    <Svg data-name='4177630_briefcase_job_suitcase_work_icon' width={size} height={size + 2}>
      <G data-name='Grupo 8'>
        <Path
          data-name='Trazado 14'
          d='M.713 10.958h1.68v6.722a.722.722 0 00.72.72h4.923a.722.722 0 00.72-.72v-4.922h3v4.922a.722.722 0 00.72.72h4.682a.722.722 0 00.72-.72v-6.722h2.042a.717.717 0 00.5-1.224L11.033.214a.717.717 0 00-1.008-.012L.221 9.721a.721.721 0 00-.168.792.7.7 0 00.66.445zm9.8-9.219l7.683 7.779h-1.037a.722.722 0 00-.72.72v6.722H13.2v-4.922a.722.722 0 00-.72-.72H8.036a.722.722 0 00-.72.72v4.922H3.834v-6.723a.722.722 0 00-.72-.72h-.625z'
          fill={color}
        />
      </G>
    </Svg>
  )
}
