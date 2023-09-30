import React from "react";

interface Props {
  children: React.ReactNode;
}

const MainReddits: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="main">{children}</div>
    </>
  );
};

export default MainReddits;