import React from 'react';
import { Avatar, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';

export function HomeTemplate() {
  const { navigate } = useNavigation();

  return (
    <VStack testID="Home-template_VStack" flex={1}>
      <VStack p={5} backgroundColor={theme.colors.primary[800]}>
        <TouchableOpacity onPress={() => navigate('Account')}>
          <Avatar bg="secondary.800">DM</Avatar>
        </TouchableOpacity>
        <Text mt={5} color={theme.colors.white} fontSize="lg">
          Olá, Diego Muniz
        </Text>
      </VStack>
    </VStack>
  );
}
