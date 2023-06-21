import React from 'react';

import { Button, theme } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

import { AccountHeaderOrganism, AccountMenuOrganism } from '../../organisms';
import { useAuthContext } from '../../contexts';

export function AccountTemplate() {
  const { signOut } = useAuthContext();
  const { t } = useTranslation();

  return (
    <>
      <AccountHeaderOrganism />
      <AccountMenuOrganism />
      <Button
        mt="5"
        variant="ghost"
        size="lg"
        leftIcon={<MaterialIcons name="logout" color={theme.colors.primary[800]} size={24} />}
        onPress={signOut}
      >
        {t('accountViews.logout')}
      </Button>
    </>
  );
}
