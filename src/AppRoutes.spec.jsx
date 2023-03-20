import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeProvider from './ThemeProvider';
import AppRoutes from './AppRoutes';

jest.mock('react-i18next', () => ({
  useTranslation: () => {
    return {
      t: (str) => str,
    };
  },
}));

describe('<AppRoutes />', () => {
  const setup = () =>
    render(
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    );

  describe('When to render the application', () => {
    it('then the title should appear', () => {
      const { getByText } = setup();
      getByText('appTitle');
    });
  });
});
