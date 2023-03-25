import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

export default function ThemeProvider({ children }) {
  const theme = extendTheme({
    colors: {
      text: {
        50: '#ffffff',
        100: '#f2f2f2',
        200: '#e6e6e6',
        300: '#d9d9d9',
        400: '#cccccc',
        500: '#bfbfbf',
        600: '#b3b3b3',
        700: '#999999',
        800: '#808080',
        900: '#666666', // text color
      },
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
    <NativeBaseProvider
      theme={theme}
      initialWindowMetrics={{
        frame: {
          x: 0,
          y: 0,
          width: 0,
          height: 0,
        },
        insets: {
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      {children}
    </NativeBaseProvider>
  );
}
