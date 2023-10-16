import { PiChatTeardropDotsBold } from "react-icons/pi";
import { LuSettings2 } from "react-icons/lu";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ChatList from "~/components/chat/chatlist";
const ChatBox: React.FC = () => {
  return (
    <>
      <div
        style={{
          boxShadow: "0 0 30px 0 rgba(255,255,255,0.2)",
        }}
        className=" flex z-50 bottom-0 w-[650px] h-[580px] right-10 fixed rounded-t-3xl p-1  "
      >
        <div className="flex flex-col rounded-tl-3xl  w-[300px]">
          <div className="h-[50px] rounded-tl-3xl  flex border-b-[1px] border-border">
            <h1 className="">Chats</h1>
            <PiChatTeardropDotsBold className="text-2xl ml-2 mt-1" />
            <LuSettings2 className="text-2xl ml-2 mt-1" />
            <HiOutlineChevronDown className="text-2xl ml-2 mt-1" />
          </div>
          <div>sdfsdf</div>
        </div>
        <div className="flex rounded-tr-3xl flex-col  w-full border-l-[1px] border-border">
          <div className="h-[50px] rounded-tl-3xl  flex ">
            skhanhsafds
            <HiOutlineChevronDown className="text-2xl ml-2 mt-1" />
            <HiOutlineExternalLink className="text-2xl ml-2 mt-1" />
            <AiOutlineClose className="text-2xl ml-2 mt-1" />
          </div>

          <ChatList />
        </div>
      </div>
    </>
  );
};
export default ChatBox;
