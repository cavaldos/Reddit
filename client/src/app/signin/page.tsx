"use client";

//image next to the form
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect, useContext } from "react";
import AxiosInstance from "~/service/axios.config";
import axios from "axios";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "~/config/firebase";

import useLocalStorage from "~/utils/useLocalStorage";
const SignPage: React.FC = () => {
  const [token, setToken] = useLocalStorage("token", "");

  const handleLoginwithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log("result", result);
        console.log("result", result.user.accessToken);
        setToken(result.user.accessToken);
      })
      .catch((error) => {
        console.log("error");
      });
    await axios
      .get("http://localhost:3000/auth/login", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error");
      });

    // const result = await signInWithPopup(auth, provider);
  };

  const url =
    "https://images.unsplash.com/photo-1696587522095-1d0b522b3e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

  return (
    <>
      <div className="flex">
        <div className="h-[100vh] w-40 bg bg-red-300 bg-cover">
          <img src={url} alt="image" className="" />
        </div>
        <div className="h-[100vh] w-full bg-slate-100 text-dark">
          <div className=" h-screen w-64  justify-center items-center flex">
            <button
              onClick={handleLoginwithGoogle}
              className=" text-dark  flex  border-2 border-gray-950		 rounded-[7px] px-4 py-2 "
            >
              <img src="/icon/gg.svg" alt="google" className="w-6 h-6 mr-3" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignPage;
