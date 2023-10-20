"use client";

import { BsChatDots } from "react-icons/bs";
import React, { useState } from "react";
import ChatBox from "~/components/chat/chatbox";
import { togglechat } from "~/redux/features/tooglechatSlice";
import { useSelector, useDispatch } from "react-redux";

const ChatIcon: React.FC = () => {
  const showChat = useSelector((state: any) => state.tooglechat);

  const dispatch = useDispatch();
  const toggleChat = () => {
    console.log(showChat);
    dispatch(togglechat());
  };
  return (
    <>
      <BsChatDots
        onClick={toggleChat}
        className="text-white text-2xl ml-2 mt-1 mx-5 justify-end "
      />
    </>
  );
};
export default ChatIcon;
