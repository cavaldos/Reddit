import { ImArrowUp, ImArrowDown } from "react-icons/im";

const Post: React.FC = () => {
  return (
    <div className="post bg-dark w-[650px] min-h-[200px] min-h-auto flex rounded-md border border-[#353436] hover:border-gray-500 ">
      <div className="bg-gray-600 m-1 mx-2 justify-center items-center align-middle">
        <ImArrowUp className="text-white text-2xl mx-auto mt-3  " />
        <h1 className="text-white text-md ml-1 mx-auto ">15</h1>
        <ImArrowDown className="text-white text-2xl mx-auto mb-1 " />
      </div>
      <div className="bg-[gray] w-full m-1 ">
        <h1 className="text-white text-md ml-1 mx-auto ">tittle</h1>
        <div className="flex " >content</div>
       <div className="flex  ">
         <div className="flex">comment</div>
         <div className="flex">share</div>
         <div className="flex">save</div>
       </div>
      </div>
    </div>
  );
};

export default Post;
