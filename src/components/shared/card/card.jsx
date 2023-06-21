import React from 'react';

import { Stack, Text, VStack } from 'native-base';

export function Card({ title, subtitle, children }) {
  return (
    <VStack p={2} bg="white" rounded="md" shadow="1">
      <VStack mb="3" mx="2">
        <Text fontSize="lg" bold>
          {title}
        </Text>
        {subtitle ? <Text fontSize="xs">{subtitle}</Text> : null}
      </VStack>
      <Stack>{children}</Stack>
    </VStack>
  );
}
