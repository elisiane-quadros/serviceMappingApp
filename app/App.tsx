import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import HomeScreen from './src/Home'
import DetailsScreen from './src/Details'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' options={{
          headerShown: false,
        }} component={HomeScreen} />
        <Stack.Screen name='Details' component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


