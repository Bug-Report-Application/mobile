import React, { useMemo } from 'react';

import { Button, VStack, theme } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';
import { MaterialIcons } from '@expo/vector-icons';

import { AccountMenuListMolecule } from '../../molecules';
import { useAuthContext } from '../../contexts';

export function AccountMenuOrganism() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();
  const { signOut } = useAuthContext();

  const flatListData = useMemo(
    () => [
      {
        id: 1,
        title: 'accountViews.menu.profile.title',
        subtitle: 'accountViews.menu.profile.subtitle',
        iconName: 'person',
        arrowRightIcon: true,
        onPress: () => navigate('Profile'),
      },
      {
        id: 2,
        title: 'accountViews.menu.security.title',
        subtitle: 'accountViews.menu.security.subtitle',
        iconName: 'security',
        arrowRightIcon: true,
        onPress: () => navigate('Security'),
      },
      {
        id: 3,
        title: 'accountViews.menu.settings.title',
        subtitle: 'accountViews.menu.settings.subtitle',
        iconName: 'settings',
        arrowRightIcon: true,
        onPress: () => navigate('Settings'),
      },
      {
        id: 4,
        title: 'accountViews.menu.about.title',
        subtitle: 'accountViews.menu.about.subtitle',
        iconName: 'info-outline',
        arrowRightIcon: true,
        onPress: () => navigate('About'),
      },
    ],
    []
  );

  return (
    <VStack testID="AccountMenuOrganism-VStack">
      <AccountMenuListMolecule flatListData={flatListData} />
      <Button
        mt="5"
        variant="ghost"
        size="lg"
        leftIcon={<MaterialIcons name="logout" color={theme.colors.primary[800]} size={24} />}
        onPress={signOut}
      >
        {t('accountViews.logout')}
      </Button>
    </VStack>
  );
}
