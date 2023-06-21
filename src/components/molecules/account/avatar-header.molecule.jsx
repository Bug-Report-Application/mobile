import React from 'react';
import { Avatar, HStack, Text, VStack } from 'native-base';

export function AvatarHeaderMolecule({ name, paper }) {
  return (
    <HStack alignItems="center" mt={8} mb={2}>
      <Avatar size="md" bg="secondary.800">
        DM
      </Avatar>
      <VStack ml={5}>
        <Text fontSize="lg" bold>
          {name}
        </Text>
        <Text fontSize="xs">{paper}</Text>
      </VStack>
    </HStack>
  );
}
