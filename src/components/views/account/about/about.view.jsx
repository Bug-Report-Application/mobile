import React from 'react';
import { Center, HStack, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import pkgJson from '../../../../../package.json';

export function AboutView() {
  const { goBack } = useNavigation();

  const date = new Date().toString();

  return (
    <VStack testID="Profile-view_VStack" flex={1}>
      <VStack p={5} backgroundColor={theme.colors.white}>
        <HStack alignItems="center" justifyContent="space-between">
          <TouchableOpacity onPress={goBack}>
            <MaterialIcons name="close" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
          <Text bold fontSize="lg">
            Sobre
          </Text>
          <TouchableOpacity>
            <MaterialIcons name="help-outline" size={28} color={theme.colors.text[500]} />
          </TouchableOpacity>
        </HStack>
      </VStack>
      <VStack mx={5} my={10}>
        <Text bold>Última atualização</Text>
        <Text>{date}</Text>
      </VStack>
      <Center>
        <Text>Versão do aplicativo: {pkgJson.version}</Text>
      </Center>
    </VStack>
  );
}
