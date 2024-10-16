'use client'

import React, { createContext, useState, useContext } from 'react';

// Create a context for authentication
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    username: null,
    token: null,
  });

  // Function to log in (set username and token)
  const login = (username, token) => {
    setAuth({ username, token });
    localStorage.setItem('username', username);
    localStorage.setItem('token', token);
    window.dispatchEvent(new Event('storage'));

  };

  // Function to log out (clear username and token)
  const logout = () => {
    setAuth({ username: null, token: null });
    localStorage.removeItem('username');
    localStorage.removeItem('token');
    window.dispatchEvent(new Event('storage'));

  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
