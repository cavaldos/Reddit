const List: React.FC = () => {
  return (
    <>
      <div className="w-[320px] bg-[#1B1B1B]  rounded-[5px] ml-auto pb-3 mt-9">
        <div className="flex border-b-[1px] border-gray-700 mt-2	 mx-4">
          <img
            src="./reddit.svg"
            alt="reddit"
            className="w-[52px] h-[52px] object-contain rounded-full py-[8px]  my-auto"
          />
          <h1 className="font-nunito font-bold text-gray-300 ml-1 mt-5">
            Post to Reddit
          </h1>
        </div>
        <div className="flex border-b-[1px] border-gray-700	 mx-4 h-10">
          <p className="font-semibold	 flex text-sm text-[#c4c9cc] my-auto ml-2  ">
            1. Remember the human
          </p>
        </div>
        <div className="flex border-b-[1px] border-gray-700	 mx-4 h-10">
          <p className="font-semibold flex text-sm text-[#c4c9cc] my-auto ml-2  ">
            2. Behave like you would in real life
          </p>
        </div>
        <div className="flex border-b-[1px] border-gray-700	 mx-4 h-10">
          <p className="font-semibold flex text-sm text-[#c4c9cc] my-auto ml-2  ">
            3. Look for the original source of content
          </p>
        </div>
        <div className="flex border-b-[1px] border-gray-700	 mx-4 h-10">
          <p className="font-semibold flex text-sm text-[#c4c9cc] my-auto ml-2  ">
            4. Search for duplicates before posting
          </p>
        </div>
        <div className="flex border-b-[1px] border-gray-700	 mx-4 h-10">
          <p className="font-semibold flex text-sm text-[#c4c9cc] my-auto ml-2  ">
            5. Read the community’s rules
          </p>
        </div>
      </div>
    </>
  );
};

export default List;