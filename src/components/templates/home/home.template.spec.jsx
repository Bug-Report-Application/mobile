import React from 'react';
import { render } from '@testing-library/react-native';
import ThemeProvider from '../../../ThemeProvider';
import { HomeTemplate } from './home.template';

const setup = () => {
  return render(
    <ThemeProvider>
      <HomeTemplate />
    </ThemeProvider>
  );
};

describe('<HomeTemplate />', () => {
  describe('When to render the component', () => {
    it('then the title should appear content', () => {
      const { getByTestId } = setup();
      getByTestId('Home-template_Center');
    });
  });
});
