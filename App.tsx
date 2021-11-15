import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// component
import Home from './pages/Home'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
	  <Stack.Navigator>
		<Stack.Screen name="Home" component={Home} />
	  </Stack.Navigator>
    </NavigationContainer>
  );
}
