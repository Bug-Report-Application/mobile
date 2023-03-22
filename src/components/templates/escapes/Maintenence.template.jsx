import React from 'react';
import { VStack } from 'native-base';
import { MaintenenceOrganisms } from '../../organisms';

export function MaintenenceTemplate() {
  return (
    <VStack testID="Maintenence-template_vstack" flex={1}>
      <MaintenenceOrganisms />
    </VStack>
  );
}
