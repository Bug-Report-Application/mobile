import React from 'react';

import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { HeaderView } from '../../../shared';
import { SettingsOrganism } from '../../../organisms';

export function SettingsTemplate() {
  const { goBack } = useNavigation();

  return (
    <VStack testID="Settings-template_VStack" flex={1}>
      <HeaderView iconLeft="keyboard-arrow-left" onPressIconLeft={goBack} title="Configuração" />
      <SettingsOrganism />
    </VStack>
  );
}
