import React, { useState } from 'react';
import { Box, Button, Image } from 'native-base';
import { useTranslation } from 'react-i18next';

import Logo from '../../../../../assets/images/icon.png';
import { useLayoutContext } from '../../../contexts';
import { SelectLanguage } from '../../../atoms';

export const HeaderMolecule = () => {
  const [isOpenLanguage, setIsOpenLanguage] = useState(false);
  const { language } = useLayoutContext();
  const { t } = useTranslation();

  return (
    <Box display="flex" justifyContent="space-between" flexDirection="row" mt={5} ml={8} mr={8}>
      <Image source={Logo} alt="Alternate Text" size="10" />

      <Button variant="ghost" onPress={() => setIsOpenLanguage(!isOpenLanguage)}>
        {language === 'pt' ? t('language.portuguese') : t('language.english')}
      </Button>

      <SelectLanguage isOpen={isOpenLanguage} setIsOpen={setIsOpenLanguage} />
    </Box>
  );
};
