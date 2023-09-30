import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";
import { GoComment } from "react-icons/go";

import { PiShareFat } from "react-icons/pi";
import { BsBookmark } from "react-icons/bs";
const Post: React.FC = () => {
  return (
    <div className="post bg-dark w-[650px] min-h-[200px] min-h-auto flex rounded-md border border-[#353436] hover:border-gray-500 ">
      <div className="bg-[#161617] p-1 px-2 justify-center items-center align-middle  rounded-l-md">
        <PiArrowFatUpLight className="text-gray-400 text-2xl mx-auto mt-3  " />
        <h1 className="text-gray-400 text-md pl-1 px-auto ">{15}</h1>
        <PiArrowFatDownLight className="text-gray-400 text-2xl mx-auto mb-1 " />
      </div>

      <div className="bg-darkcontent w-full flex flex-col  rounded-r-md ">
        <div className="h-[30px] flex">
          <img
            src="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
            alt=""
            className="rounded-full h-[20px] w-[20px] mt-1 ml-2"
          />
          <h2 className="mt-[5px] ml-2 font-bold text-[12px]">r/Notion</h2>
        </div>
        <div className="ml-2  text-xl	 font-medium	mb-3">Notion and obsidian</div>
        <div className="flex-1 ml-2">
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
            <div className="flex  hover:bg-gray-600 rounded-sm h-[30px] pl-1">
              <GoComment className="text-gray-400 text-xl font-bold mx-auto mt-1  cursor-pointer" />
              <h2 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto ">
                {20} Comments
              </h2>
            </div>
            <div className="flex  hover:bg-gray-600 rounded-sm h-[30px] pl-1 cursor-pointer">
              <PiShareFat className="text-gray-400 text-xl font-bold mx-auto mt-1   " />
              <h1 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto">
                Share
              </h1>
            </div>
            <div className="flex  hover:bg-gray-600 rounded-sm h-[30px] pl-1 cursor-pointer">
              <BsBookmark className="text-gray-400 text-xl font-bold mx-auto mt-1 h-5   " />
              <h1 className="text-gray-400 text-xs	mt-[5px] mr-3 font-bold	 pl-1 px-auto ">
                Save
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;