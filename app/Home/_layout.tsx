import React from 'react'
import MyTabBar from 'components/general/Tab'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'

export default function AppLayout() {

  return (
    <React.Fragment>
      <BottomSheetModalProvider>
        <MyTabBar />
      </BottomSheetModalProvider>
    </React.Fragment>
  )
}