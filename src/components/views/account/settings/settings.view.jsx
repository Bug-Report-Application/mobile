import React from 'react';
import { VStack } from 'native-base';

import { SettingsTemplate } from '../../../templates';

export function SettingsView() {
  return (
    <VStack testID="Settings-view_VStack" flex={1}>
      <SettingsTemplate />
    </VStack>
  );
}
