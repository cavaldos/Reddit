'use client'

import React, { use } from "react";
import { auth } from "~/config/firebase";
import { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
interface AuthContextProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      console.log("user", user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <AuthContext.Provider value={{ user, setUser }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};
export default AuthProvider;
