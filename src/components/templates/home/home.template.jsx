import React from 'react';
import { Avatar, Text, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';

import { TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';

export function HomeTemplate() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <VStack testID="Home-template_VStack" flex={1}>
      <VStack p={5} backgroundColor={theme.colors.primary[800]}>
        <TouchableOpacity onPress={() => navigate('Account')}>
          <Avatar bg="secondary.800">DM</Avatar>
        </TouchableOpacity>
        <Text mt={5} color={theme.colors.white} fontSize="lg">
          {t('homeViews.hello', { name: 'Diego Muniz' })}
        </Text>
      </VStack>
    </VStack>
  );
}
