import React from 'react';
import { StatusBar } from 'react-native';
import { PrivateRoutes } from './private';
import { PublicRoutes } from './public';
import { LayoutProvider, useAuthContext } from '../contexts';

export function AppRoutes() {
  const { isAuthenticated } = useAuthContext();

  return (
    <>
      <LayoutProvider>
        <StatusBar backgroundColor="#f2f2f2" hidden={false} barStyle="dark-content" />
        {isAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
      </LayoutProvider>
    </>
  );
}
