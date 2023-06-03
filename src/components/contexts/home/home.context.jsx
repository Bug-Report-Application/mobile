import React, { createContext, useContext, useMemo } from 'react';

const HomeContext = createContext();

export const useHomeContext = () => useContext(HomeContext);

export function HomeProvider({ children }) {
  const value = useMemo(() => ({}), []);

  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
}
