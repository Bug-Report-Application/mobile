import React from 'react';
import './src/i18n';
import ThemeProvider from './src/ThemeProvider';
import { AppRoutes } from './src/AppRoutes';

export default function App() {
  return (
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}
