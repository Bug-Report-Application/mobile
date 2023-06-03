import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext({});

export const useAuthContext = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const onAuthenticated = useCallback(async () => {
    const token = await AsyncStorage.getItem('@accessToken');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    onAuthenticated();
    return () => onAuthenticated();
  }, []);

  const signIn = useCallback(async () => {
    await AsyncStorage.setItem('@accessToken', 'TESTANDO');
    setIsAuthenticated(true);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@accessToken');
    setIsAuthenticated(false);
  }, []);

  const value = useMemo(() => ({ isAuthenticated, signIn, signOut }), [isAuthenticated]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
