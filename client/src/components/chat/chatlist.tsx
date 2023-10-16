const Guest: React.FC = () => {
  return (
    <>
      <div className="flex w-full h-20 relative">
        <img
          src="https://www.redditstatic.com/avatars/avatar_default_02_0079D3.png"
          className="w-12 h-12 rounded-full"
        />
        <div className="">
          <div className="flex">
            <h1 className="text-xs text-gray-500">Hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

const User: React.FC = () => {
  return (
    <>
      <div>
        <h1>dsf</h1>
      </div>
    </>
  );
};

const ChatList: React.FC = () => {
  return (
    <>
      <div className="h-full w-full ">
        <div className="h-full ">
          <Guest />
          <Guest />
          dsfadfdsf
       </div>
        <div className="flex mt-auto h-14 bg-red-400 bottom-0 items-center">
          <textarea className="w-full  h-full mx-4 "></textarea>
          <button className="h-full ">Send</button>
        </div>
      </div>
    </>
  );
};

export default ChatList;
