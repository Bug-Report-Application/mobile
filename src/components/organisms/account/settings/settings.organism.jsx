import React from 'react';
import { VStack } from 'native-base';

import { MenuItemAppMolecule, MenuItemLayoutMolecule } from '../../../molecules';

export function SettingsOrganism() {
  const settingsAppData = [
    {
      id: 1,
      title: 'Notificações',
      subtitle: 'Selecione se deseja receber notificações',
      iconName: 'notifications-none',
      arrowRightIcon: true,
    },
  ];

  const settingsLayoutData = [
    {
      id: 1,
      title: 'Idioma',
      subtitle: 'Selecione a linguagem de sua escolha',
      iconName: 'language',
      arrowRightIcon: false,
    },
  ];

  return (
    <VStack testID="Settings-organism_VStack" flex={1}>
      <MenuItemAppMolecule flatListData={settingsAppData} />
      <MenuItemLayoutMolecule flatListData={settingsLayoutData} />
    </VStack>
  );
}
