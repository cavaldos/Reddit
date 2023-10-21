"use client";
import { IoSearchOutline } from "react-icons/io5";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import { PiTipiBold } from "react-icons/pi";
import { BsDot } from "react-icons/bs"
import Image from "next/image";

interface Props {
  children: React.ReactNode;
}

const Comment: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className=" w-full min-h-[110px]  flex flex-col pb-2">
        <div className="flex">
          <Image
            src="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
            alt=""
            className="rounded-full h-[30px]  w-[30px] mt-1 ml-2"
            width={30}
            height={30}
          />
          <h1 className="ml-[10px] mt-2  text-sm font-medium">khanh</h1>
          <BsDot className="text-ct text-sm mt-3 my-auto " />
          <h1 className=" text-ct mt-3 font-medium text-xs my-auto">2 hours ago</h1>
        </div>
        <div className=" border-l-2 border-border mx-5 mt-4 px-6 pb-1">
          <p className="ml-[#1px] text-[#e2e0e0]  font-medium mb-2">
            {"hello erre"}
          </p>
          <p className="ml-[#1px] text-[#e2e0e0]  font-medium mb-2">
            {"hello erre"}
          </p>

          <div className="flex text-ct  h-8 justify-start items-center ">
            <PiArrowFatUpLight className="text-2xl hover:bg-[#444444] hover:text-red-500" />
            <h1 className="text-[#ccc] px-1 text-xs font-bold">{15}</h1>
            <PiArrowFatDownLight className=" text-2xl mr-1 hover:bg-[#444444] hover:text-blue-500" />
            <button className="  h-full pl-2 rounded-[2px] text-sm font-bold mr-2 flex items-center hover:bg-[#444444]  pr-1">
              <GoComment className="text-2xl  mr-1" />
              Reply
            </button>
            <button className="rounded-[2px] h-full text-sm font-bold mr-2 flex items-center hover:bg-[#444444] px-2">
              Share
            </button>

            <button className=" rounded-[2px] h-full text-sm font-bold mr-2 flex items-center hover:bg-[#444444] px-1">
              <PiTipiBold className="" />
              Tip
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

const ListComment: React.FC = () => {
  return (
    <>
      <div className="w-full min-h-[400px] ">
        <div className="  mx-12 mt-5 h-10 border-b-[1px] border-border flex  pb-2 mb-6 ">
          <h1 className=" text-sm font-bold text-blue-400 items-center flex">
            Sort by:Best
          </h1>
          <div className=" w-2 border-r-2 border-border h-[18px] my-auto mx-2"></div>
          <div className=" items-center flex bg-[#3B3B3B] pl-2 rounded-[5px] ">
            <IoSearchOutline className="text-gray-400 text-xl font-bold mx-auto mt-1  cursor-pointer ml-auto mr-2" />
            <input
              type="text"
              placeholder="Search Comments"
              className="w-full pl-1  text-[#D6DADD] text-[14px] font-normal  font-sans h-full resize-none outline-none"
            />
          </div>
        </div>
        <div className="w-full">
          <Comment>
            <Comment>
              <Comment>
                <h1>xcvx</h1>
              </Comment>
              <Comment>
                <h1>xcvx</h1>
              </Comment>
              <Comment>
                <h1>xcvx</h1>
              </Comment>
            </Comment>
          </Comment>
        </div>
      </div>
    </>
  );
};
export default ListComment;
