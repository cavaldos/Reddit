"use client";
import React, { useState } from "react";
import Header from "~/components/header/header";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import { BsFillBellFill } from "react-icons/bs";
const HeaderGroup: React.FC = () => {
  return (
    <>
      <div className="bg-[#1A1A1B] h-[365px] pt-[50px] mb-5">
        <img
          src="/21126072.png"
          alt="group"
          className="object-cover h-[210px] bg-center w-full  mb-2"
          width={100}
          height={210}
        />
        <div className="flex justify-start items-center w-[59vw] mx-auto">
          <img
            src="/reddit.svg"
            alt="reddit"
            className="w-[90px] h-[90px] rounded-full p-[8px]   relative bottom-8  "
          />
          <div className="flex flex-col mr-auto">
            <h1 className="text-3xl font-bold text-white mb-6">r/AskReddit</h1>
            <p className="text-gray-400 text-sm">r/AskReddit</p>
          </div>

          <div className="flex flex-row">
            <div className="flex flex-col mr-2">
              <button className=" text-[#cac2c2] border rounded-2xl h-8 font-bold text-sm  px-5  mb-2">
                Joined
              </button>
            </div>
            <div className="flex flex-col">
              <button className=" text-[#cac2c2] border rounded-2xl h-8 w-8 font-bold text-sm justify-center    ">
                <BsFillBellFill className="text-[#cac2c2] text-xl mx-auto" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const GroupPage: React.FC = () => {
  return (
    <>
      <Header />

      <HeaderGroup />

      <div className={`flex justify-center w-[59vw] min-h-screen  container`}>
        <ListPost />
        <Sub />
      </div>
    </>
  );
};
export default GroupPage;
