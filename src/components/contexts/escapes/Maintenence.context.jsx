import React, { createContext, useContext, useMemo } from 'react';

const MaintenenceContext = createContext();

export const useManutenenceContext = () => useContext(MaintenenceContext);

export function MaintenenceProvider({ children }) {
  const value = useMemo(() => ({}), []);
  return <MaintenenceContext.Provider value={value}>{children}</MaintenenceContext.Provider>;
}
