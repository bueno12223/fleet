import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// typescript
import { RootStackParamList } from './types'

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {
  return (
    <NavigationContainer>
	  <Stack.Navigator>
		<Stack.Screen name="Home" component={Home} />
	  </Stack.Navigator>
    </NavigationContainer>
  );
}
