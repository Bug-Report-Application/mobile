import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { theme } from 'native-base';
import { AccountView, HomeView, MaintenenceView } from '../../views';
import { EscapeRoutes } from '../../constants';

const Stack = createNativeStackNavigator();

export function PrivateRoutes() {
  const privateRoutes = [
    {
      name: 'Home',
      component: HomeView,
      featureFlag: false,
      options: {
        headerShown: false,
        statusBarColor: theme.colors.primary[800],
      },
    },
    {
      name: 'Account',
      component: AccountView,
      featureFlag: false,
      options: {
        headerShown: false,
        statusBarColor: theme.colors.white,
        statusBarStyle: 'dark',
        animation: 'fade_from_bottom',
      },
    },
    {
      name: EscapeRoutes.MAINTENENCE,
      component: MaintenenceView,
      featureFlag: false,
      options: {
        headerShown: false,
      },
    },
  ];

  return (
    <>
      <StatusBar backgroundColor="#f2f2f2" hidden={false} barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            animation: 'fade',
          }}
        >
          {privateRoutes
            .filter((route) => route.featureFlag !== true)
            .map((route, index) => {
              return (
                <Stack.Screen
                  key={index}
                  name={route.name}
                  component={route.component}
                  options={route.options}
                />
              );
            })}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
