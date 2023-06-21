import React from 'react';

import { AccountTemplate } from '../../templates';
import { VStack } from 'native-base';

export function AccountView() {
  return (
    <VStack testID="Account-view_VStack" flex={1}>
      <AccountTemplate />
    </VStack>
  );
}
