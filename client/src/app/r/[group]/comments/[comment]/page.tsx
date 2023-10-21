"use client";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import MainReddits from "~/components/main/main";
import Image from "next/image";

import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { GoComment } from "react-icons/go";
import { BiBell } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";

import ListComment from "~/components/comment";
import { useRouter } from "next/navigation";

const AddComment: React.FC = () => {
  return (
    <>
      <div className=" mt-7 mx-12 flex flex-col gap-1">
        <h1 className="text-sm">
          Comment as <a className="text-blue-400">Khanh</a>
        </h1>
        <div className="w-full flex flex-col rounded-[3px] border-[1px] border-border min-h-[180px] ">
          <textarea
            placeholder="What are your thoughts?"
            className="w-full rounded-xl p-2 bg-darkcontent  text-[#D6DADD] text-[14px] font-normal  font-sans h-full resize-none outline-none"
          ></textarea>
          <div className="flex bg-[#272628] justify-end items-center rounded-b-[3px] h-10 align-middle mt-2">
            <h1 className=" font-bold  text-[#eee] text-[12px] mx-5"> Markdown Mode</h1>
            <button className="bg-gray-200 mr-3 rounded-xl text-[#555252] text-[13px] px-5 hover:bg-white font-bold">Comment</button>
          </div>
        </div>
      </div>
    </>
  );
};
const Post: React.FC = () => {
  return (
    <>
      <div className="post pt-3 w-full min-h-[200px] min-h-auto flex rounded-[5px]  hover:border-gray-500 ">
        <div className="bg-darkcontent p-1 px-2 justify-center items-center align-middle  rounded-l-[6px]">
          <PiArrowFatUpLight className="text-gray-400 text-2xl mx-auto mt-3  " />
          <h1 className="text-gray-200 font-bold text-[13px] font-mono pl-1 px-auto ">
            {15}
          </h1>
          <PiArrowFatDownLight className="text-gray-400 text-2xl mx-auto mb-1 " />
        </div>

        <div className="bg-darkcontent w-full flex flex-col  rounded-r-[6px] ">
          <div className="h-[30px] flex">
            <Image
              src="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
              alt=""
              className="rounded-full h-[20px] w-[20px] mt-1 ml-2"
            />
            <h2 className="mt-[5px] ml-2 font-bold text-[12px]">r/Notion</h2>
            <BiBell className="text-gray-400 text-xl font-bold mx-auto mt-1  cursor-pointer ml-auto mr-2" />
          </div>
          <div className="ml-2  text-xl	 font-medium	mb-3">
            Notion and obsidian
          </div>
          <div className="flex-1 ml-2">
            {/* conntet */}
            <p className="text-[14px] font-normal  font-sans text-[#D6DADD]">
              If the provided uid, email or phone number is already in use by an
              existing user or the user cannot be created for any other reason,
              the above method fails with an error. For a full list of error
              codes, including descriptions and resolution steps, see Admin
              Authentication API Errors.
            </p>
            <p className="text-[14px] font-normal  font-sans text-[#D6DADD]">
              If the provided uid, email or phone number is already in use by an
              existing user or the user cannot be created for any other reason,
              the above method fails with an error. For a full list of error
              codes, including descriptions and resolution steps, see Admin
              Authentication API Errors.
            </p>
          </div>
          <div className="h-10  mt-4 gap-x-2">
            <div className="flex justify-start items-center align-middle ml-2 mt-1 gap-x-2">
              <div className="flex  hover:bg-[#262728] hover:cursor-pointer justify-center pt-1  rounded-[4px] h-[35px] pl-1">
                <GoComment className="text-gray-400 text-xl font-bold mx-auto mt-1  cursor-pointer" />
                <h2 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto ">
                  {20} Comments
                </h2>
              </div>
              <div className="flex  hover:bg-[#262728] hover:cursor-pointer justify-center pt-1  rounded-[4px] h-[35px] pl-1 cursor-pointer">
                <PiShareFat className="text-gray-400 text-xl font-bold mx-auto mt-1   " />
                <h1 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto">
                  Share
                </h1>
              </div>
              <div className="flex  hover:bg-[#262728] hover:cursor-pointer justify-center pt-1  rounded-[4px] h-[35px] pl-1 cursor-pointer">
                <BsBookmark className="text-gray-400 text-xl font-bold mx-auto mt-1 h-5   " />
                <h1 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto ">
                  Save
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DetailPost: React.FC = () => {
  return (
    <>
      <div className="post bg-darkcontent w-[750px] min-h-[200px] min-h-auto flex flex-col rounded-[5px]  border-[#353436] hover:border-gray-500 pb-10">
        <Post />
        <AddComment />
        <ListComment />
      </div>
    </>
  );
};

const CommentsPage: React.FC = () => {
  return (
    <>
      <div className="min-h-[100vh] bg-[#191818]">
        <div className="min-h-[90vh] w-[67%] pt-[50px] bg-[#020302] mx-auto">
          <MainReddits>
            <DetailPost />
            <Sub />
          </MainReddits>
        </div>
      </div>
    </>
  );
};
export default CommentsPage;
