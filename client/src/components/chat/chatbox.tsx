"use client";
import { PiChatTeardropDotsBold } from "react-icons/pi";
import { LuSettings2 } from "react-icons/lu";
import { HiOutlineChevronDown } from "react-icons/hi";
import { HiOutlineExternalLink } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import ChatView from "~/components/chat/chatview";
import { GoDotFill } from "react-icons/go";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { togglechat } from "~/redux/features/tooglechatSlice";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setReceiveID } from "~/redux/features/messageSlice";

interface User {
  displayName: string;
  photoURL: string;
  email: string;
  uid: string;
}
const UserWidget: React.FC<User> = ({ displayName, photoURL, email, uid }) => {
  const dispatch = useDispatch();

  const handleUserClick = () => {
    dispatch(setReceiveID(uid));
  };
  return (
    <>
      <div
        onClick={handleUserClick}
        className="flex items-center hover:cursor-pointer  "
      >
        <div className="flex py-1  gap-2 justify-start hover:bg-[#3F4042] rounded-[5px]">
          <div className="w-[40px] h-[40px] ml-2  relative">
            <Image
              src={photoURL}
              alt="profile pic"
              className="w-[40px] h-[40px] rounded-full bg-transparent "
              width={40}
              height={40}
            />
            <GoDotFill className="absolute bottom-[-7px] right-[-7px] text-2xl  text-green-600" />
          </div>
          <div className="w-36 flex items-start font-bold ">
            <h1 className=" hover:cursor-pointer">{displayName}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

// props show chat
const ChatBox: React.FC = () => {
  const dispatch = useDispatch();
  const showChat = useSelector((state: any) => state.tooglechat.value);

  const toggleChat = () => {
    console.log("showchat", showChat);
    dispatch(togglechat());
  };
  const [user, setUser] = useState<User[]>([]);
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get("http://localhost:3000/user/getall");
      setUser(res.data);
    };
    fetchUser();
  }, []);

  return (
    <>
      {showChat ? (
        <div
          style={{
            boxShadow: "0 0 30px 0 rgba(255,255,255,0.2)",
          }}
          className=" flex z-50 bottom-1 text-[#eee] bg-dark w-[650px] h-[580px] right-10 fixed rounded-t-3xl p-1   "
        >
          <div className="flex flex-col rounded-tl-3xl  w-[300px]">
            <div className="h-[45px] justify-center  rounded-tl-3xl gap-1  flex border-b-[1px] border-border">
              <h1 className=" ml-1 mr-auto font-bold">Chats</h1>
              <PiChatTeardropDotsBold className="text-2xl ml-2 mt-1" />
              <LuSettings2 className="text-2xl ml-2 mt-1" />
              <HiOutlineChevronDown className="text-2xl ml-2 mt-1 mr-1" />
            </div>
            <div className="flex flex-col w-full overflow-y-auto">
              {user.map((item) => (
                <UserWidget
                  key={item.uid}
                  displayName={item.displayName}
                  photoURL={item.photoURL}
                  email={item.email}
                  uid={item.uid}
                />
              ))}
            </div>
          </div>
          <div className="flex rounded-tr-3xl flex-col  w-full border-l-[1px] border-border">
            <div className="h-[50px] rounded-tr-3xl my-1 flex justify-end ">
              <h1 className=" ml-1 mr-auto font-bold">New Chat</h1>
              <HiOutlineChevronDown className="text-xl ml-2 mt-1" />
              <HiOutlineExternalLink className="text-xl ml-2 mt-1" />
              <AiOutlineClose
                onClick={toggleChat}
                className="text-xl ml-2 mt-1 mr-3"
              />
            </div>
            <ChatView />
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
export default ChatBox;
