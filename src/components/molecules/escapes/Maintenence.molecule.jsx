import React from 'react';
import { Image, Text } from 'native-base';
import { useTranslation } from 'react-i18next';
import MaintenenceImage from '../../../../assets/images/escapes/maintenence-icon.png';

export function MaintenenceMolecule() {
  const { t } = useTranslation();

  return (
    <>
      <Image
        size={200}
        resizeMode="contain"
        source={MaintenenceImage}
        alt="Maintenence image"
        mb={5}
        testID="Maintenence-molecule_image"
      />
      <Text fontSize="lg" bold mb={3} testID="Maintenence-molecule_title">
        {t('escapeViews.maintenence.title')}
      </Text>
      <Text textAlign="center" testID="Maintenence-molecule_subtitle">
        {t('escapeViews.maintenence.subtitle')}
      </Text>
    </>
  );
}
