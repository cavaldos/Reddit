import Search from "~/components/header/search";
import Select from "~/components/header/select";
import { BsChatDots } from "react-icons/bs";
import { BellOutlined } from "@ant-design/icons";
import Account from "~/components/header/account";
import Image from "next/image";
const Header: React.FC = () => {
  
  const src="reddit.svg" || "https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
  return (
    <>
      <div className="h-[50px] bg-darkcontent items-center border-b-[0.5px]  border-slate-600 fixed w-full flex z-40	  ">
        <Image
          className="h-[35px]  ml-4 mr-1 "
          src={src}
          alt="logo"
          width={30}
          height={30}
        />
        <h1 className="font-sans  font-medium text-2xl	ml-2 "> reddit</h1>
        <Select />
        <Search />
        <div className="flex  w-[500px] justify-end">
          <BellOutlined className="text-white text-2xl ml-2 mb-1 justify-end" />
          <BsChatDots className="text-white text-2xl ml-2 mt-1 mx-5 justify-end " />

          <Account />
        </div>
      </div>
    </>
  );
};

export default Header;
