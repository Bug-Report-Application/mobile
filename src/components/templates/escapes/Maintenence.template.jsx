import React from 'react';
import { VStack } from 'native-base';
import { MaintenenceOrganisms } from '../../organisms/escapes/Maintenence.organism';

export function MaintenenceTemplate() {
  return (
    <VStack
      testID="Maintenence-template_center"
      flex={1}
      px={10}
      backgroundColor="light.50"
    >
      <MaintenenceOrganisms />
    </VStack>
  );
}
