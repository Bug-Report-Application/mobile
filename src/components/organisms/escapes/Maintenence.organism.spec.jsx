import React from 'react';
import { Text as MockText } from 'react-native';
import { render } from '@testing-library/react-native';
import ThemeProvider from '../../../ThemeProvider';
import { MaintenenceOrganisms } from './Maintenence.organism';

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
      <MaintenenceOrganisms />
    </ThemeProvider>
  );
};

describe('<MaintenenceOrganisms />', () => {
  describe('When to render the component', () => {
    it('then the title should appear content', () => {
      const { getByTestId } = setup();
      getByTestId('Maintenence-organism_center');
    });
  });
});
