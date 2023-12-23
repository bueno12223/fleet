import React, { forwardRef } from 'react'
import { BottomSheetModal } from '@gorhom/bottom-sheet'
import { Button, View } from 'react-native'

interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints: (string | number)[];
  initialSnapIndex?: number;
  showCloseButton?: boolean;
}

const BottomSheet = forwardRef<BottomSheetModal, BottomSheetProps>(({ children, snapPoints, initialSnapIndex = 0, showCloseButton = false }, ref) => {
  const handleClose = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.dismiss()
    }
  }

  return (
    <BottomSheetModal
      ref={ref}
      snapPoints={snapPoints}
      index={initialSnapIndex}
    >
      {showCloseButton && (
        <View style={{alignItems: 'flex-end'}}>
          <Button title='Close' onPress={handleClose} />
        </View>
      )}
      {children}
    </BottomSheetModal>
  )
})

export default BottomSheet