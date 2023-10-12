import React from "react";


interface Props {
  children: React.ReactNode;
}

const MainReddits: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="bg-dark  min-h-screen pt-[70px] xl:w-[55vw] container w-full ">
        {children}
      </div>
    </>
  );
};

export default MainReddits;
