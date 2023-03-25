import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaintenenceView } from './components/views';

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <>
      <StatusBar
        backgroundColor="#f2f2f2"
        hidden={false}
        barStyle="dark-content"
      />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Maintenence"
          screenOptions={{
            headerShown: false,
            animation: 'fade',
          }}
        >
          <Stack.Screen name="Maintenence" component={MaintenenceView} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
