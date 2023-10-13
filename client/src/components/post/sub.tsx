"use client";

import React from "react";
import { useRouter } from "next/navigation";

const Premium: React.FC = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/premium");
  };
  return (
    <>
      <div className="h-[90px] w-full bg-darkcontent  rounded-[4px]	 border border-gray-600 p-1 relative ">
        <div className="flex">
          <img
            src="./reddit.svg"
            alt=""
            className="h-[20px] w-[20px] ml-2 mt-1"
          />
          <div className="flex flex-col">
            <h1 className="text-gray-50 text-[13px] ml-3">Reddit Premium</h1>
            <p className="text-gray-300 ml-3 text-[11px]  ">
              The best Reddit experience
            </p>
          </div>
        </div>
        <button
          onClick={handleClick}
          className="bg-[#FF4401] hover:bg-[#ff4603f3] text-sm font-semibold absolute bottom-2 mx-auto left-3 right-3 h-8 rounded-3xl"
        >
          Try Now
        </button>
      </div>
    </>
  );
};

const Create: React.FC = () => {
  const router = useRouter();


  return (
    <>
      <div className="min-h-[90px] w-full bg-darkcontent  rounded-[4px]	 border border-gray-600 p-1  flex flex-col gap-2 ">
        <div className="bg-slate-800 m-[-4px] rounded-t-[3px]  h-9"></div>
        <div className="flex flex-row">
          <img
            src="./reddit.svg"
            alt=""
            className="h-[20px] w-[20px] ml-2 mt-1"
          />
          <h1 className="text-gray-50 font-bold text-md mt-1 ml-3">Home</h1>
        </div>

        <p className=" text-sm text-slate-300	 mx-auto ml-2	 ">
          Your personal Reddit frontpage. Come here to check in with your
          favorite communities.
        </p>

        <div className="   w-[94%] mx-auto border-t-[1px] border-gray-700 mb-3	  h-2"></div>

        <button
            onClick={() => router.push("/submit")}
          className="bg-gray-300 hover:bg-gray-400 text-dark text-sm font-bold bottom-2 mx-auto left-3 right-3 h-8 rounded-3xl  w-[94%] ">
          Create Post
        </button>
        <button className=" text-white  hover:bg-gray-950 border text-sm font-medium bottom-2 mx-auto left-3 right-3 h-8 rounded-3xl  w-[94%]">
          Create Community
        </button>
      </div>
    </>
  );
};

const Sub: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center mx-auto w-[313px]  h-full ml-6 gap-2">
        <Premium />
        <Create />
      </div>
    </>
  );
};
export default Sub;
