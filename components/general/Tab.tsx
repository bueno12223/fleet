import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { colors } from 'styles/theme'
import { StyleSheet } from 'react-native'
import Header from './Header'
import { HomeIcon, ListIcon, PlusCircleIcon } from 'components/svg'
import SearchIcon from 'components/svg/SearchIcon'


function MyTabBar() {
  const tabsToIgnore = ['components/DriverItem', 'components/CarItem',]
  return (
    <Tabs 
      initialRouteName='dashboard' 
      sceneContainerStyle={styles.safeArea}
      screenOptions={{
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.neutral,
        header: Header,
      }}
      
    >
      <Tabs.Screen
        name='Dashboard/index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <HomeIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='Search/index'
        options={{
          title: 'Buscar',
          tabBarIcon: ({ color }) => <SearchIcon color={color} />,

        }}
      />
      <Tabs.Screen
        name='RegisterCar/index'
        options={{
          title: 'Registrar',
          tabBarIcon: ({ color }) => <PlusCircleIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name='History/index'
        options={{
          title: 'Historial',
          tabBarIcon: ({ color }) => <ListIcon color={color} />,
        }}
      />
      {
        tabsToIgnore.map((tab) => (
          <Tabs.Screen
            name={tab}
            options={{
              href: null,
            }}
          />
        ))
      
      }
    </Tabs>
  )
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.white,
  },
  safeArea: {
    backgroundColor: colors.background,
  },
}
)

export default MyTabBar