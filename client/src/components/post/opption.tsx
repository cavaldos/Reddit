import { AiFillRocket } from "react-icons/ai";
import { HiOutlineFire } from "react-icons/hi";
import { CiSun } from "react-icons/ci";
import { LiaAngleDoubleUpSolid } from "react-icons/lia";
const Options: React.FC = () => {
  return (
    <>
      <div className="flex flex-row bg-darkcontent border rounded-[4px] border-gray-600  hover:border-gray-500 h-[60px] mb-2 gap-2 px-5">
        <div className="my-auto flex hover:bg-[#262728] hover:cursor-pointer py-[2px] rounded-2xl items-center px-2    ">
          <AiFillRocket className="text-gray-400 text-3xl my-auto hover:text-gray-200" />
          <h1 className="text-[14px] font-bold	ml-1 my-auto text-gray-400 hover:text-gray-200 ">
            Best
          </h1>
        </div>
        <div className="my-auto flex hover:bg-[#262728] hover:cursor-pointer py-[2px] rounded-2xl items-center px-2  ">
          <HiOutlineFire className="text-gray-400 text-3xl my-auto hover:text-gray-200" />
          <h1 className="text-[14px] font-bold	ml-1 my-auto text-gray-400 hover:text-gray-200 ">
            Host
          </h1>
        </div>
        <div className="my-auto flex hover:bg-[#262728] hover:cursor-pointer py-[2px] rounded-2xl items-center px-2  ">
          <CiSun className="text-gray-400 text-3xl my-auto hover:text-gray-200" />
          <h1 className="text-[14px] font-bold	ml-1 my-auto text-gray-400 hover:text-gray-200 ">
            New
          </h1>
        </div>
        <div className="my-auto flex hover:bg-[#262728] hover:cursor-pointer py-[2px] rounded-2xl items-center px-2  ">
          <LiaAngleDoubleUpSolid className="text-gray-400 text-3xl my-a hover:text-gray-200uto" />
          <h1 className="text-[14px] font-bold	ml-1 my-auto text-gray-400 hover:text-gray-200 ">
            Top
          </h1>
        </div>
      </div>
    </>
  );
};
export default Options;
