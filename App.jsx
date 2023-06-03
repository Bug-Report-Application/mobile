import React from 'react';
import { registerRootComponent } from 'expo';
import './src/i18n';
import ThemeProvider from './src/ThemeProvider';
import { AppRoutes } from './src/components/routes';
import { AuthProvider } from './src/components/contexts';

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  );
}

registerRootComponent(App);
