import React from 'react';
import { MaintenenceOrganisms } from '../../organisms';
import { VStack } from 'native-base';

export function MaintenenceTemplate() {
  return (
    <VStack testID="Maintenence-template_vstack" flex={1}>
      <MaintenenceOrganisms />
    </VStack>
  );
}
