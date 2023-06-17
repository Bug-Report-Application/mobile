import { MaterialIcons } from '@expo/vector-icons';
import { Actionsheet, Box, Text, theme } from 'native-base';
import React from 'react';
import { useLayoutContext } from '../../contexts';
import { useTranslation } from 'react-i18next';

export function SelectLanguage({ isOpen, setIsOpen }) {
  const { t } = useTranslation();
  const { onChangeLanguage } = useLayoutContext();

  return (
    <Actionsheet isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
      <Actionsheet.Content>
        <Box w="100%" px={4} mb={2} display="flex" flexDirection="row" alignItems="center">
          <MaterialIcons name="language" size={24} color={theme.colors.primary[600]} />
          <Text fontSize="lg" ml="2">
            {t('language.select')}
          </Text>
        </Box>
        <Actionsheet.Item
          onPress={() => {
            onChangeLanguage('pt');
            setIsOpen(!isOpen);
          }}
        >
          {t('language.portuguese')}
        </Actionsheet.Item>
        <Actionsheet.Item
          onPress={() => {
            onChangeLanguage('en');
            setIsOpen(!isOpen);
          }}
        >
          {t('language.english')}
        </Actionsheet.Item>
      </Actionsheet.Content>
    </Actionsheet>
  );
}
