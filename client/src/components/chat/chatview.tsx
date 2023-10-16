import { IoSend } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";

import  { connectWebSocket, sendMessage } from "~/utils/socket";
const Guest: React.FC = () => {
  return (
    <>
      <div className="flex my-2  gap-2 justify-start">
        <div className="w-[30px] h-[30px] ml-2  ">
          <img
            src="	https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png"
            alt="profile pic"
            className="w-[30px] h-[30px] rounded-full bg-transparent "
            width={30}
            height={30}
          />
        </div>
        <div className=" bg-[#3F4042] min-w-[35px] flex items-center  max-w-[65%] min-h-[35px] rounded-xl">
          <p className="font-medium text-[#eee] px-2 py-1">
            fsadfdgfdgg df dg gsdg df dfg dfg df dfhdfgdfg
          </p>
        </div>
      </div>
    </>
  );
};

const User: React.FC = () => {
  return (
    <>
      <div className="flex my-2  gap-2 justify-end">
        <div className=" bg-[#3F4042] min-w-[35px] flex items-center  max-w-[65%] min-h-[35px] rounded-xl">
          <p className="font-medium text-[#eee] px-2 py-1">
            fsadfdgfdgg df dg gsdg df dfg dfg df dfhdfgdfg
          </p>
        </div>
        <div className="w-[30px] h-[30px] mr-2  ">
          <img
            src="	https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png"
            alt="profile pic"
            className="w-[30px] h-[30px] rounded-full bg-transparent "
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

const ChatView: React.FC = () => {
  return (
    <>
      <div className="flex flex-col h-full bg-[#242427] ">
        <div className="h-[480px] flex flex-col overflow-y-auto ">
          <User />
          <Guest /> <User />
          <Guest /> <User />
          <Guest /> <User />
          <Guest /> <User />
          <Guest /> <User />
          <Guest /> <User />
          <Guest />
        </div>
        <div className="h-12  mt-auto flex items-center py-1">
          <button>
            <BiSolidPlusCircle className="ml-3 text-2xl" />
          </button>
          <button>
            <FaRegImages className="text-2xl ml-2" />
          </button>
          <textarea
            className="w-full px-4 h-full rounded-3xl bg-[#3B3B3D]  outline-none font-bold resize-none p-2 text-[#eee] mx-3 font-nunito"
            placeholder="Aa"
          />
          <button className=" flex items-center w-12 h-12 rounded-full text-white text-2xl">
            <IoSend />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatView;
