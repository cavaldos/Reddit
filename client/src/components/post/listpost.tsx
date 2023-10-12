import Post from "./post";

const ListPost: React.FC = () => {
    return (
      <>
        <div className="flex flex-col gap-2 ">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
      </>
    );
};
export default ListPost;
