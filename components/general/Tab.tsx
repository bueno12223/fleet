import React from 'react'
import { Tabs } from 'expo-router/tabs'
import { colors } from 'styles/theme'
import { WorksiteIcon } from 'components/svg/WorksiteIcon'
import { StyleSheet, View } from 'react-native'
import Header from './Header'


function MyTabBar() {
  return (
    <Tabs initialRouteName='drivers' 
      sceneContainerStyle={styles.safeArea}
      screenOptions={{
        tabBarStyle: styles.tab,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.text,
        header: Header,
      }}
      
    >
      <Tabs.Screen
        name='drivers'
        options={{
          href: 'UserHome/Drivers',
          title: 'Conductores',
          tabBarIcon: ({ color }) => (
            <WorksiteIcon size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='owners'
        options={{
          href: 'UserHome/Owners',
          title: 'Propietarios',
          tabBarIcon: ({ color }) => (
            <WorksiteIcon size={24} color={color} />
          ),
          tabBarLabel: 'Propietarios',
          tabBarStyle: styles.tab,
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          href: 'UserHome/Profile',
          title: 'Perfil',
        }}
      />
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