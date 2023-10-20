"use client";
import React, { createContext, useState, useEffect } from "react";
import { auth } from "~/config/firebase";

const AuthContext = createContext<null | {
  user: null;
  setUser: React.Dispatch<React.SetStateAction<null>>;
}>(null);
interface AuthContextProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
    
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;