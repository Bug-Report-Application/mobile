import React from 'react';
import { Center } from 'native-base';
import { MaintenenceMolecule } from '../../molecules/escapes/Maintenence.molecule';

export function MaintenenceOrganisms() {
  return (
    <Center
      testID="Maintenence-organism_center"
      flex={1}
      justifyContent="center"
    >
      <MaintenenceMolecule />
    </Center>
  );
}
