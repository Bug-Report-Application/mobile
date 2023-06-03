import React, { useState } from 'react';

import { Actionsheet, Box, Button, Image, Text, theme } from 'native-base';
import { useTranslation } from 'react-i18next';
import Logo from '../../../../../assets/images/icon.png';
import { useLayoutContext } from '../../../contexts';
import { MaterialIcons } from '@expo/vector-icons';

export const HeaderMolecule = () => {
  const [isOpen, setOpen] = useState(false);
  const { onChangeLanguage, language } = useLayoutContext();
  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="row" mt={5} ml={8} mr={8}>
      <Image source={Logo} alt="Alternate Text" size="10" />

      <Button variant="ghost" onPress={() => setOpen(!isOpen)}>
        {language === 'pt' ? t('language.portuguese') : t('language.english')}
      </Button>

      <Actionsheet isOpen={isOpen} onClose={() => setOpen(!isOpen)}>
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
              setOpen(!isOpen);
            }}
          >
            {t('language.portuguese')}
          </Actionsheet.Item>
          <Actionsheet.Item
            onPress={() => {
              onChangeLanguage('en');
              setOpen(!isOpen);
            }}
          >
            {t('language.english')}
          </Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </Box>
  );
};
