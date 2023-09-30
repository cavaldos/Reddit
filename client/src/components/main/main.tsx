import React from "react";
import Post from "~/components/post";

interface Props {
  children: React.ReactNode;
}

const MainReddits: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="main bg-dark min-h-screen  pt-[70px] ">
        <Post />
        {children}
      </div>
    </>
  );
};

export default MainReddits;
