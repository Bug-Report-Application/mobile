import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPasswordView, LoginView, MaintenenceView } from '../../views';
import { AuthRoutes, EscapeRoutes } from '../../constants';

const Stack = createNativeStackNavigator();

export function PublicRoutes() {
  const publicRoutes = [
    {
      name: AuthRoutes.LOGIN,
      component: LoginView,
      featureFlag: false,
      options: {
        headerShown: false,
      },
    },
    {
      name: AuthRoutes.FORGOT_PASSWORD,
      component: ForgotPasswordView,
      featureFlag: false,
      options: {
        headerShown: false,
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
          initialRouteName={AuthRoutes.LOGIN}
          screenOptions={{
            animation: 'fade_from_bottom',
          }}
        >
          {publicRoutes
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
