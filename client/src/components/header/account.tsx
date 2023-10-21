"use client";
import Image from "next/image";
import useLocalStorage from "~/utils/useLocalStorage";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { useMemo } from "react";
const Account: React.FC = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const router = useRouter();

  const isTokenExpired = (token: string) => {
    const decodedToken: any = JSON.parse(atob(token.split(".")[1]));
    return decodedToken.exp * 1000 < Date.now();
  };
  const user = useSelector((state: any) => state.user);
  if (token && !isTokenExpired(token)) {
    return (
      <>
        <div className="flex  w-[260px] h-[40px] items-center align-middle rounded-md  hover:border-slate-700	 hover:border-[0.2px] mr-0">
          <Image
            className="rounded-full h-[30px] w-[30px] ml-2"
            src={user.photoURL}
            alt="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
            width={30}
            height={30}
          />
          <h1 className="text-white text-sm ml-2">u/{user.disPlayName}</h1>
        </div>
      </>
    );
  }
  return (
    <>
      <div
        onClick={() => router.push("/signin")}
        className="flex  w-[260px] h-[40px] items-center align-middle rounded-md  hover:border-slate-700	hover:cursor-pointer hover:border-[0.2px] mr-0"
      >
        <h1 className="text-white text-sm ml-2">SIGN IN</h1>
      </div>
    </>
  );
};
export default Account;
