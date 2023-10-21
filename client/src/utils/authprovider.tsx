"use client";

import useLocalStorage from "~/utils/useLocalStorage";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [token, setToken] = useLocalStorage("token", "");
  const isTokenExpired = (token: string) => {
    const decodedToken: any = JSON.parse(atob(token.split(".")[1]));
    return decodedToken.exp * 1000 < Date.now();
  };
  const router = useRouter();

  useEffect(() => {
    if ( !isTokenExpired(token)) {
        return router.replace("/signin");
    }
  }, [token]);
  return <>{children}</>;
};

export default AuthProvider;
