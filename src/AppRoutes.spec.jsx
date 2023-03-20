import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeProvider from './ThemeProvider';
import AppRoutes from './AppRoutes';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
  }),
}));

function setup() {
  return render(
    <ThemeProvider>
      <AppRoutes />
    </ThemeProvider>
  );
}

describe('<AppRoutes />', () => {
  describe('When to render the application', () => {
    it('then the title should appear', () => {
      const { getByText } = setup();
      getByText('appTitle');
    });
  });
});
