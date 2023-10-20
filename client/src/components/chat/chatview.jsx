"use client";
import React, { useState, useEffect, use } from "react";
import { w3cwebsocket as WebSocket } from "websocket";

import { IoSend } from "react-icons/io5";
import { FaRegImages } from "react-icons/fa";
import { BiSolidPlusCircle } from "react-icons/bi";

import { connectWebSocket, sendMessage } from "~/utils/socket";
import { useSelector, useDispatch } from "react-redux";

import { setChat } from "~/redux/features/messageSlice";
const Guest = ({ id, createdAt, text, role }) => {
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
          <p className="font-medium text-[#eee] px-2 py-1">{text}</p>
        </div>
      </div>
    </>
  );
};

const User = ({ id, createdAt, text, role }) => {
  const user = useSelector((state) => state.user);
  const photoURL =
    user.photoURL ||
    "https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png";
  return (
    <>
      <div className="flex my-2  gap-2 justify-end">
        <div className=" bg-[#3F4042] min-w-[35px] flex items-center  max-w-[65%] min-h-[35px] rounded-xl">
          <p className="font-medium text-[#eee] px-2 py-1">{text}</p>
        </div>
        <div className="w-[30px] h-[30px] mr-2  ">
          <img
            src={user.photoURL}
            alt="https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png"
            className="w-[30px] h-[30px] rounded-full bg-transparent "
            width={30}
            height={30}
          />
        </div>
      </div>
    </>
  );
};

const ChatView = () => {
  const dispatch = useDispatch();

  const Mess = useSelector((state) => state.message);
  const user = useSelector((state) => state.user);
  const YOUR_CLIENT_ID = user.id;
  const RECEIVER_ID = Mess.RECEIVE_ID;
  const [socket, setSocket] = useState(null);
  const [receivedMessages, setReceivedMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  useEffect(() => {
    const newSocket = connectWebSocket(
      YOUR_CLIENT_ID,
      RECEIVER_ID,
      onMessageReceived
    );
    setSocket(newSocket);
    return () => {
      if (newSocket) {
        newSocket.close();
      }
    };
  }, []);
  const onMessageReceived = (message) => {
    // setReceivedMessages((prevMessages) => [...prevMessages, message]);
    // console .log(message)
    // dispatch(setChat(message));

    setReceivedMessages((prev) => [...prev, message]);
    dispatch(
      setChat({
        text: "Hello",
        role: false,
      })
    );
  };
  console.log("khnahdfsd", receivedMessages);

  const handleSendMessage = () => {
    sendMessage(socket, YOUR_CLIENT_ID, RECEIVER_ID, inputMessage);
    setInputMessage("");
  };

  const messages = useSelector((state) => state.message.chat);
  return (
    <>
      <div className="flex flex-col h-full bg-[#242427] ">
        <div className="h-[480px] flex flex-col overflow-y-auto ">
          {messages.map((message) => {
            if (message.role === false) {
              return (
                <Guest
                  key={message.id}
                  id={message.id}
                  createdAt={message.createdAt}
                  text={message.text}
                  role={message.role}
                />
              );
            } else {
              return (
                <User
                  key={message.id}
                  id={message.id}
                  createdAt={message.createdAt}
                  text={message.text}
                  role={message.role}
                />
              );
            }
          })}
        </div>
        <div className="h-12  mt-auto flex items-center py-1">
          <button>
            <BiSolidPlusCircle className="ml-3 text-2xl" />
          </button>
          <button>
            <FaRegImages className="text-2xl ml-2" />
          </button>
          <textarea
            onChange={(e) => setInputMessage(e.target.value)}
            className="w-full px-4 h-full rounded-3xl bg-[#3B3B3D]  outline-none font-bold resize-none p-2 text-[#eee] mx-3 font-nunito"
            placeholder="Aa"
          />
          <button
            onClick={handleSendMessage}
            className=" flex items-center w-12 h-12 rounded-full text-white text-2xl"
          >
            <IoSend />
          </button>
        </div>
      </div>
    </>
  );
};

export default ChatView;
