import React from 'react';
import { Text as MockText } from 'react-native';
import { render } from '@testing-library/react-native';
import ThemeProvider from '../../../ThemeProvider';
import { MaintenenceMolecule } from './Maintenence.molecule';

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
      <MaintenenceMolecule />
    </ThemeProvider>
  );
};

describe('<MaintenenceMolecule />', () => {
  describe('When to render the component', () => {
    it('then the title should appear image', () => {
      const { getByTestId } = setup();
      getByTestId('Maintenence-molecule_image');
    });

    it('then the title should appear title', () => {
      const { getByTestId } = setup();
      getByTestId('Maintenence-molecule_title');
    });

    it('then the title should appear subtitle', () => {
      const { getByTestId } = setup();
      getByTestId('Maintenence-molecule_subtitle');
    });
  });
});
