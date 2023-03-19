import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';
import './i18n';
import AppRoutes from './src/AppRoutes';

export default function App() {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#a9ddef',
        100: '#a9ddef',
        200: '#7ecde7',
        300: '#54bcde',
        400: '#2189ab',
        500: '#2189ab',
        600: '#165C73', // primary color
        700: '#14556b',
        800: '#104456',
        900: '#0c3340',
      },
      secondary: {
        50: '#edf8f4',
        100: '#daf1e9',
        200: '#b6e2d3',
        300: '#a3dbc9',
        400: '#91d4be',
        500: '#6cc6a8',
        600: '#50BB98', // secondary color
        700: '#399375',
        800: '#399375',
        900: '#15372c',
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
      <AppRoutes />
    </NativeBaseProvider>
  );
}
