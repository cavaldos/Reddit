import React from "react";

interface Props {
  children: React.ReactNode;
  width?: string;
  bg?: string;
}

const MainReddits: React.FC<Props> = ({ children, width, bg }) => {
  const size = width || "52vw";
  const background = bg || "#dark";

  return (
    <>
      <div
        className={`flex justify-center w-[${size}] bg-${background} min-h-screen pt-[70px] container `}
      >
        <div className="flex">{children}</div>
      </div>
    </>
  );
};

export default MainReddits;
