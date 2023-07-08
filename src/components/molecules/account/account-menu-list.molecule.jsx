import React from 'react';

import { Divider, FlatList } from 'native-base';
import { useTranslation } from 'react-i18next';

import { MenuItemAccountAtom } from '../../atoms';

export function AccountMenuListMolecule({ flatListData }) {
  const { t } = useTranslation();

  return (
    <FlatList
      data={flatListData}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <>
          <MenuItemAccountAtom
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
  );
}
