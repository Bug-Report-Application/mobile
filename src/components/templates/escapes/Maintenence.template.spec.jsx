import React from 'react';
import { render } from '@testing-library/react-native';
import { Text as MockText } from 'react-native';
import { MaintenenceTemplate } from './Maintenence.template';
import ThemeProvider from '../../../ThemeProvider';

jest.mock('../../../../assets/images/escapes/maintenence-icon.png', () => ({
  ...jest.requireActual('../../../../assets/images/escapes/maintenence-icon.png'),
  MockText: () => <MockText>MOCK-TEXT</MockText>,
}));

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (str) => str,
  }),
}));

const setup = () => {
  return render(
    <ThemeProvider>
      <MaintenenceTemplate />
    </ThemeProvider>
  );
};

describe('<MaintenenceTemplate />', () => {
  describe('When to render the component', () => {
    it('then the title should appear content', () => {
      const { getByTestId } = setup();
      getByTestId('Maintenence-template_vstack');
    });
  });
});
