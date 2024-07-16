import { createContext, useContext, useMemo, useState } from 'react';

type AuthContext = {
  isAuthenticated: boolean;
  login: (userToken: string) => void; // Updated to accept a string argument
  logout: () => void;
};

const AuthContext = createContext<AuthContext>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
});

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState('');

  const login = (userToken: string): void => {
    setToken(userToken);
  };

  const logout = (): void => {
    setToken('');
  };
  const isAuthenticated = !!token;

  // Create a useMemo hook to avoid creating a new object every time the component re-renders
  const authContextValue = useMemo(() => ({ isAuthenticated, login, logout }), [isAuthenticated]);

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
