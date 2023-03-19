import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from 'native-base';
import { useTranslation } from 'react-i18next';

function AppRoutes() {
  const { t } = useTranslation();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <Text>{t('appTitle')}</Text>
    </View>
  );
}

export default AppRoutes;
