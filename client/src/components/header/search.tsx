import { IoSearchOutline } from "react-icons/io5";

const Search: React.FC = () => {
  return (
    <>
      <div className="flex bg-[#272729] w-[50vw] border-[0.51px] border-slate-700 rounded-[30px] items-center  	">
        <IoSearchOutline className="text-gray-400 text-2xl ml-2 mt-1" />
        <input
          className="bg-transparent text-white  ml-4 outline-none w-[300px] h-[40px] "
          placeholder="Search reddit"
          type="text"
        />
      </div>
    </>
  );
};
export default Search;
