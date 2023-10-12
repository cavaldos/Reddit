"use client";

//image next to the form
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { createContext, useState, useEffect, useContext } from "react";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
import GoogleButton from "react-google-button";
import { auth } from "~/config/firebase"


const SignPage: React.FC = () => {



// const [user, setUser] = useState<any>(null);
// const googleSignIn = () => {
//   const provider = new GoogleAuthProvider();
//   signInWithPopup(auth, provider)
//     .then((result) => {
//       setUser(result.user);
//       console.log("khanh", result.user);
//     })
//     .catch((error) => {
//       console.log("khanh2", error.message);
//     });
// };
// const handleLogin = async () => {
//   try {
//     await googleSignIn();
//     console.log("login");
//   } catch (error) {
//     console.log(error);
//   }
// };

// // useEffect(() => {
// //   const unsubscribe = onAuthStateChanged(auth, (user) => {
// //     if (user) {
// //       setUser(user);
// //       console.log("khanh3", user);
// //     } else {
// //       setUser(null);
// //       console.log("khanh4", user);
// //     }
// //   });
// //   return () => unsubscribe();
// // }, []);

// const handleLogout = () => {
//   signOut(auth)
//     .then(() => {
//       setUser(null);
//       console.log("Đăng xuất thành công");
//     })
//     .catch((error) => {
//       console.log("Lỗi đăng xuất", error);
//     });
// };
// console.log("khanh5", user);



  const url =
    "https://images.unsplash.com/photo-1696587522095-1d0b522b3e36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80";

 
  const router = useRouter();

  const auth = true;
  console.log("khanh", auth);
  if (!auth) {
    router.push("/");
    return <></>;
  }


  return (
    <>
      <div className="flex">
        <div className="h-[100vh] w-40 bg bg-red-300 bg-cover">
          <img src={url} alt="image" className="" />
        </div>
        <div className="h-[100vh] w-full bg-slate-100 text-dark">
          <div className=" h-screen w-64  justify-center items-center flex">
            <button
              // onClick={handleLogin}
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
