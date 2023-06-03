import React from 'react';
import { VStack } from 'native-base';
import { HomeProvider } from '../../contexts';
import { HomeTemplate } from '../../templates';

export function HomeView() {
  return (
    <HomeProvider>
      <VStack testID="Home-view_VStack" flex={1}>
        <HomeTemplate />
      </VStack>
    </HomeProvider>
  );
}
