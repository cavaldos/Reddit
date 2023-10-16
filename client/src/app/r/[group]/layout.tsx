'use client'

import Header from "~/components/header/header";
interface Props {
  children: React.ReactNode;
}

const GroupLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};
export default GroupLayout;
