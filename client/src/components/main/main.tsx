import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainReddits: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="main bg-dark min-h-screen  pt-[70px] ">
    dsf
        {children}
      </div>
    </>
  );
};

export default MainReddits;