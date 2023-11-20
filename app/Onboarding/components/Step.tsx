import React from 'react'
import Paper from '../../../components/general/Paper'
import { SvgProps } from 'react-native-svg'
import { StyleSheet } from 'react-native'
import Text from 'components/general/Text'

interface Props {
  image: React.FC<SvgProps>
  title: string
}

function StepOne({ image: Image, title }: Props) {
  return (
    <Paper style={styles.paper}>
      <Image width={280} height={250} />
      <Text style={[styles.text]}>{title}</Text>
    </Paper>
  )
}

const styles = StyleSheet.create({
  paper: {
    paddingTop: 30,
    width: 300,
  },
  text: {
    textAlign: 'center',
    marginTop: 50,
    fontSize: 20,
  }
})
export default StepOne