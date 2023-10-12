import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
const Home: React.FC<ChildNode> = () => {
  return (
    <>
      <Header />
      <MainReddits>
        <div className="bg-gray-500 flex ">
          <ListPost />
          <Sub />

        </div>
      </MainReddits>
    </>
  );
};

export default Home;
