import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BottomSheet from 'components/common/BottomSheet'
import { BottomSheetModal } from '@gorhom/bottom-sheet'


interface Props {
  ref: React.Ref<BottomSheetModal>
}

const FiltersBottomSheet = ({ ref }: Props) => {
  return (
    <BottomSheet
      ref={ref}
      snapPoints={['25%', '50%', '90%']}
      showCloseButton
    >
      <View>
        <Text>Filters</Text>
      </View>
    </BottomSheet>
  )
}

export default FiltersBottomSheet

const styles = StyleSheet.create({})