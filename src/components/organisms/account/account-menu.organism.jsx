import React, { useMemo } from 'react';

import { Divider, FlatList, VStack } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { MenuItemAccountMolecule } from '../../molecules';

export function AccountMenuOrganism() {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  const menuList = useMemo(
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
      <FlatList
        data={menuList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <>
            <MenuItemAccountMolecule
              iconName={item.iconName}
              title={t(`${item.title}`)}
              subtitle={t(`${item.subtitle}`)}
              arrowRightIcon={item.arrowRightIcon}
              onPress={item.onPress}
            />
            <Divider my="2" />
          </>
        )}
      />
    </VStack>
  );
}
