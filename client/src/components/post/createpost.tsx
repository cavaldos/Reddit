import { PiImageSquareBold } from "react-icons/pi";
import { BsLink45Deg } from "react-icons/bs";
const CreatePost: React.FC = () => {
  return (
    <>
      <div
       
        className="flex flex-row bg-darkcontent border rounded-[4px] border-gray-600  hover:border-gray-500 h-[60px] mb-2">
        <img
          src="./reddit.svg"
          alt="reddit"
          className="w-[52px] h-[52px] object-contain rounded-full p-[8px]  my-auto"
        />
        <input
          type="text"
          placeholder="Create Post"
          className=" text-gray-200 bg-[#272729] placeholder-gray-500 p-3 border-gray-600  rounded-[4px] w-[90%] h-[40px] outline-none mr-2 ml-2 my-auto border "
        />
        <PiImageSquareBold className="text-gray-400 text-3xl my-auto ml-4 mr-4" />
        <BsLink45Deg className="text-gray-400 text-3xl my-auto mr-5" />
      </div>
    </>
  );
};
export default CreatePost;
