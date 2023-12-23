import React from 'react'
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { View } from 'react-native'
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types'
import Button from 'components/Inputs/Button'
import tw from 'settings/tailwind'

interface BottomSheetProps {
  children: React.ReactNode;
  snapPoints: (string | number)[];
  initialSnapIndex?: number;
  ref?: React.Ref<BottomSheetModalMethods>;
  showCloseButton?: boolean;

}

const BottomSheet: React.FC<BottomSheetProps> = ({ children, ref, snapPoints, initialSnapIndex = 0, showCloseButton = false }) => {
  const handleClose = () => {
    if (ref && 'current' in ref && ref.current) {
      ref.current.dismiss()
    }
  }
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={ref}
        snapPoints={snapPoints}
        index={initialSnapIndex}
      >
        <View style={tw`flex flex-row justify-center items-center mb-4`}>
          {showCloseButton && (
            <View style={{alignItems: 'flex-end'}}>
              <Button text='Close' onPress={handleClose} />
            </View>
          )}
          {children}
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  )
}

export default BottomSheet