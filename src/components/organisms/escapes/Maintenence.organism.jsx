import React from 'react';
import { Center } from 'native-base';
import { MaintenenceMolecule } from '../../molecules';

export function MaintenenceOrganisms() {
  return (
    <Center
      testID="Maintenence-organism_center"
      flex={1}
      justifyContent="center"
      px={10}
    >
      <MaintenenceMolecule />
    </Center>
  );
}
