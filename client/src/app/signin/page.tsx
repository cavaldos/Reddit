"use client";

//image next to the form
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import AxiosInstance from "~/service/axios.config";
import AuthProvider from "~/utils/AuthContext";
import Link from "next/link";
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
import { useDispatch } from "react-redux";
import { setUser } from "~/redux/features/userSlice";
import useLocalStorage from "~/utils/useLocalStorage";
const SignPage: React.FC = () => {
  const [token, setToken] = useLocalStorage("token", "");
  const dispatch = useDispatch();
  const router = useRouter();

  const isTokenExpired = (token: string) => {
    if (!token || token.split(".").length !== 3) {
      return false;
    }

    try {
      const decodedToken: any = JSON.parse(atob(token.split(".")[1]));
      return decodedToken.exp * 1000 < Date.now();
      // ...
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  React.useEffect(() => {
    console.log("token", isTokenExpired(token));
    if (token && !isTokenExpired(token)) {
      return router.replace("/");
    }
  }, [token]);
  const handleLoginwithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result: any) => {
        console.log("result", result);
        console.log("result", result.user.accessToken);
        setToken(result.user.accessToken);
        // dispatch(
        //   setUser({
        //     uid: result.user.uid,
        //     photoURL: result.user.photoURL,
        //     disPlayName: result.user.disPlayName,
        //     email: result.user.email,
        //   })
        // );
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
        router.push("/");
      })
      .catch((error) => {
        console.log("error");
      });

    // const result = await signInWithPopup(auth, provider);
  };

  const url = "https://i.imgur.com/2t1nB0F.jpg";

  return (
    <>
      <div className="flex">
        <div className="h-[100vh] w-40 bg bg-red-300 bg-cover">
          <Image src={url} alt="image" className="" />
        </div>
        <div className="h-[100vh] w-full bg-slate-100 text-dark">
          <div className=" h-screen w-64  justify-center items-center flex">
            <button
              onClick={handleLoginwithGoogle}
              className=" text-dark  flex  border-2 border-gray-950		 rounded-[7px] px-4 py-2 "
            >
              <Image src="/icon/gg.svg" alt="google" className="w-6 h-6 mr-3" />
              Sign in with Google
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignPage;
