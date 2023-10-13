import Post from "./post";
import CreatePost from "~/components/post/createpost";
import Options from "./opption";

const ListPost: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-2 ">
        <CreatePost />
        <Options />
        <Post />
        <Post />
        <Post />
        <Post />
        <span className="loading loading-spinner loading-md"></span>
      </div>
    </>
  );
};
export default ListPost;
