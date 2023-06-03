import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeProvider from '../../../ThemeProvider';
import { HomeView } from './home.view';

const setup = () => {
  return render(
    <ThemeProvider>
      <HomeView />
    </ThemeProvider>
  );
};

describe('<HomeView />', () => {
  describe('When to render the component', () => {
    it('then the title should appear content', () => {
      const { getByTestId } = setup();
      getByTestId('Home-view_VStack');
    });
  });
});
