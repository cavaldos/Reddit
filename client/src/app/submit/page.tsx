"use client";
import React, { useState } from "react";
import Header from "~/components/header/header";
import { GoIssueDraft } from "react-icons/go";
import List from "~/components/post/list";
import { PiNotebookLight } from "react-icons/pi";
import { GoImage } from "react-icons/go";
import { BiLinkAlt } from "react-icons/bi";
import { BsPostcard } from "react-icons/bs";
import { IoAdd } from "react-icons/io5";
import TextEditor from "~/components/editor";

import "react-quill/dist/quill.snow.css";


const CreatePost: React.FC = () => {
  const [value, setValue] = useState("");
  console.log(value);
  return (
    <>
      <div className=" w-[40vw] mr-6 rounded-[3px] p-1 ">
        <div className="border-b-[1px] border-border pb-3">
          <h1 className="font-bold   font-nunito text-gray-200 text-[18px]  mt-2 ">
            Create a Post
          </h1>
        </div>

        <div className="border-[1px] bg-darkcontent border-border my-3 h-[40px] w-80 rounded-[4px] flex items-center">
          <GoIssueDraft className="text-gray-400 h-6 w-6 mx-2 " />
          <h1 className=" text-gray-200 font-medium">Choose a community</h1>
        </div>

        <div className=" rounded-[3px] bg-[#1B1B1B] full-width-container">
          <div className="flex h-12 border-b-[1px] border-border	 justify-center items-center text-center">
            <div className=" flex flex-1  border-r-[1px] border-[#4c4b4b] text-white h-full  justify-center items-center">
              <PiNotebookLight className="h-6 w-6 mx-2" />
              <h1 className="font-bold text-sm text-gray-400">Post</h1>
            </div>
            <div className="flex flex-1  border-r-[1px] border-[#4c4b4b] text-white h-full  justify-center items-center">
              <GoImage className="h-6 w-6 mx-2 text-gray-100 " />
              <h1 className="font-bold text-sm text-gray-400">Image & Video</h1>
            </div>
            <div className="flex flex-1  border-r-[1px] border-[#4c4b4b] text-white h-full  justify-center items-center">
              <BiLinkAlt className="h-6 w-6 mx-2 text-gray-100 " />
              <h1 className="font-bold text-sm text-gray-400">Link</h1>
            </div>
            <div className="flex flex-1  border-r-[1px] border-[#4c4b4b] text-white h-full  justify-center items-center">
              <BsPostcard className="h-6 w-6 mx-2 text-gray-100 " />
              <h1 className="font-bold text-sm text-gray-400">Poll</h1>
            </div>
          </div>

          <input
            type="text"
            placeholder="Title"
            className=" text-gray-200 bg-[#272729] placeholder-gray-500  border-border p-2 rounded-[3px]  h-[40px] outline-none border  ml-4 mr-4  my-3 min-w-[95.5%] inner-div mx-4 "
          />
          <div className=" inner-div border-[1px] border-border rounded-[3px] mx-4 mb-3">
            <TextEditor/>
            {/* <ReactQuill
              
              value={value}
              onChange={setValue}
              placeholder="Text (optional)"
            /> */}
          </div>
          <div className=" inner-div rounded-[3px] mx-4 mb-3 flex gap-2">
            <button className="flex border-[1px] border-ct text-ct rounded-2xl pl-2 pr-4 py-[2px]  ">
              <IoAdd className="h-6 w-6  text-ct " />
              OC
            </button>
            <button className="flex border-[1px] border-ct text-ct rounded-2xl pl-2 pr-4 px-2 py-[2px]">
              <IoAdd className="h-6 w-6  text-ct " />
              Spoiler
            </button>
            <button className="flex border-[1px] border-ct text-ct rounded-2xl pl-2 pr-4 px-2 py-[2px]">
              <IoAdd className="h-6 w-6  text-ct " />
              NSFW
            </button>
            <button className="flex border-[1px] border-ct text-ct rounded-2xl pl-2 pr-4 px-2 py-[2px]">
              <IoAdd className="h-6 w-6  text-ct " />
              Flair
            </button>
          </div>
          <div className="flex flex-row justify-between items-center mx-4">
            <h1 className="text-gray-400 font-bold text-sm">
           
            </h1>
            <button className="bg-slate-300 text-ct font-bold text-sm rounded-3xl px-6 py-2 mx-4 mb-3">
              Post
            </button>
          </div>
          <div className="bg-[#262728] border-t-[1px] border-border rounded-b-[3px] h-[100px] ">
            <div className="flex flex-row justify-between items-center mx-4">
              <h1 className="text-gray-400 font-bold text-sm">
                This is a preview of your post
              </h1>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const SubMitPage: React.FC = () => {
  return (
    <>
      <Header />
      <div
        className={`flex justify-center w-[59vw] min-h-screen pt-[70px] container`}
      >
        <CreatePost />
        <List />
      </div>
    </>
  );
};
export default SubMitPage;
