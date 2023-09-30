import Image from "next/image";
const Account: React.FC = () => {
  return (
    <>
      <div className="flex  w-[260px] h-[40px] items-center align-middle rounded-md  hover:border-slate-700	 hover:border-[0.2px] mr-0">
        <Image
          className="rounded-full h-[30px] w-[30px] ml-2"
          src="https://www.redditstatic.com/avatars/avatar_default_19_0079D3.png"
          alt="profile"
        />
        <h1 className="text-white text-sm ml-2">u/username</h1>
      </div>
    </>
  );
};
export default Account;
