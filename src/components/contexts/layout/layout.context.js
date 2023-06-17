import React, { createContext, useCallback, useContext, useLayoutEffect, useMemo } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTranslation } from 'react-i18next';

const LayoutContext = createContext();

export const useLayoutContext = () => useContext(LayoutContext);

export function LayoutProvider({ children }) {
  const { i18n } = useTranslation();

  useLayoutEffect(() => {
    (async () => {
      const lang = await AsyncStorage.getItem('@language');
      i18n.changeLanguage(lang ? lang : 'pt');
    })();
  }, []);

  const onChangeLanguage = useCallback(async (lang) => {
    await AsyncStorage.setItem('@language', lang);
    i18n.changeLanguage(lang);
  }, []);

  const value = useMemo(
    () => ({
      language: i18n.language,
      onChangeLanguage,
    }),
    [i18n.language]
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
}
