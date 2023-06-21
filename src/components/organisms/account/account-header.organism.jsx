import React from 'react';
import { VStack, theme } from 'native-base';
import { ActionsHeaderMolecule, AvatarHeaderMolecule } from '../../molecules';

export function AccountHeaderOrganism() {
  return (
    <VStack p={5} backgroundColor={theme.colors.white}>
      <ActionsHeaderMolecule />
      <AvatarHeaderMolecule name="Diego Muniz" paper="Desenvolvedor" />
    </VStack>
  );
}
