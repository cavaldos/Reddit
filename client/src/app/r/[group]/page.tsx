"use client";
import React, { useState } from "react";
import Header from "~/components/header/header";
import ListPost from "~/components/post/listpost";
import { BsFillBellFill } from "react-icons/bs";
import { LuCakeSlice } from "react-icons/lu";
import { BsThreeDots } from "react-icons/bs";
import { PiEyeSlashDuotone } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useRouter } from "next/navigation";

const AboutCommunity: React.FC = () => {
  const [checked, setChecked] = useState("checked");

  console.log(checked);
  return (
    <>
      <div className="flex bg-darkcontent  border-[1px]  rounded-[4px] p-3 border-border flex-col items-center mx-auto w-[313px]  h-full gap-2">
        <div className="text-ct flex  w-full mb-3">
          <h1 className="font-bold text-[14px]">About Community</h1>
          <BsThreeDots className="justify-center ml-auto mr-2" />
        </div>
        <div>
          <p className="text-[13px] text-[#cfcdcd] ">
            Write, plan, collaborate, and get organized. Notion is all you need
            — in one tool. This community-run subreddit is all about Notion, the
            future of productivity apps.
          </p>
        </div>
        <div className=" flex w-full  border-b-[1px] border-border pb-4 mb-2 ">
          <LuCakeSlice className="text-2xl mr-3 text-[#b9b8b8] scale-x-[-1]" />
          <h1 className="text-ct font-sans text-[15px] mt-[1px]">
            Created {"Mar 28,2018"}
          </h1>
        </div>
        <div className="border-border border-b-[1px] flex w-full gap-1">
          <div className="  text-[#fffc] mr-4 font-semibold ">
            360k
            <p className="text-ct text-[11px]">Members</p>
          </div>
          <div className=" text-[#fffc] mr-5 font-semibold mb-6">
            <div className="flex">
              <GoDotFill className="text-green-400  my-auto mr-1 text-[13px] " />
              218
            </div>
            <p className="text-ct text-[11px]">Online</p>
          </div>
          <div className=" flex-1 ml-2 text-[#fffc] font-semibold">
            Top 1%
            <p className="text-ct text-[11px]">Ranked by Size</p>
          </div>
        </div>
        <button className=" bg-gray-200 font-bold text-[#494747] w-full mx-2 h-8 rounded-2xl">
          Create Post
        </button>
        <div className=" w-full justify-center flex flex-col my-4">
          <button className=" text-[#ccc8c8] flex px-2  font-bold text-[12px] hover:bg-[#39383B] rounded-xl h-7 items-center">
            COMMUNITY OPTIONS
            <AiOutlineDown className="text-[#ccc8c8] text-xl ml-auto" />
          </button>
          <div className=" flex mt-4">
            <PiEyeSlashDuotone className="text-[#fffc] text-2xl mr-2" />
            <h1 className="text-[#fffc] text-[13px]">Community theme </h1>
            <input type="checkbox" className="toggle toggle-success ml-auto" />
          </div>
        </div>
      </div>
    </>
  );
};

const Rule: React.FC = () => {
  return (
    <>
      <div className="flex bg-darkcontent  border-[1px]  rounded-[4px] p-3 border-border flex-col items-center mx-auto w-[313px]  h-full gap-2">
        <div className="text-ct flex  w-full mb-3">
          <h1 className="font-bold text-[14px]">Rule</h1>
          <BsThreeDots className="justify-center ml-auto mr-2" />
        </div>

        <div className=" flex w-full  border-b-[1px] border-border pb-4 mb-2 ">
          <h1 className="text-ct font-sans text-[15px] mt-[1px]">
           Rule
          </h1>
        </div>
      </div>
    </>
  );
};
const Fillter: React.FC = () => {
  return (
    <>
      <div className="flex bg-darkcontent  border-[1px]  rounded-[4px] p-3 border-border flex-col items-center mx-auto w-[313px]  h-full gap-2">
        <div className="text-ct flex  w-full mb-3">
          <h1 className="font-bold text-[14px]">Fillter</h1>
          <BsThreeDots className="justify-center ml-auto mr-2" />
        </div>

        <div className=" flex w-full  border-b-[1px] border-border pb-4 mb-2 ">
          <h1 className="text-ct font-sans text-[15px] mt-[1px]">
            Fillter by flair
          </h1>
        </div>
      </div>
    </>
  );
};

const HeaderGroup: React.FC = () => {
  return (
    <>
      <div className="bg-[#1A1A1B] h-[365px] pt-[50px] mb-5 ">
        <img
          src="/21126072.png"
          alt="group"
          className="object-cover h-[210px] bg-center w-full  mb-2"
          width={100}
          height={210}
        />
        <div className="flex justify-start items-center w-[59vw] mx-auto px-16">
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
      <div className={`flex justify-center w-[52vw] min-h-screen container`}>
        <ListPost />
        <div className="flex flex-col    items-center mx-auto ml-6 h-full  gap-2">
          <AboutCommunity />
          <Fillter />
          <Rule />
        </div>
      </div>
    </>
  );
};
export default GroupPage;
