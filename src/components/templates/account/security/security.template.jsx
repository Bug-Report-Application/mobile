import React from 'react';

import { VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { ResetPasswordFormOrganism } from '../../../organisms';
import { HeaderView } from '../../../shared';

export function SecurityTemplate() {
  const { goBack } = useNavigation();

  return (
    <VStack testID="Security-template_VStack" flex={1}>
      <HeaderView iconLeft="keyboard-arrow-left" onPressIconLeft={goBack} title="Segurança" />
      <ResetPasswordFormOrganism />
    </VStack>
  );
}
