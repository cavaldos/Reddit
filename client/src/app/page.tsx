import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import Chat from "~/components/chat/chat";
const Home: React.FC = () => {
  return (
    <>
      <Chat />
      <Header />
      <MainReddits>
        <ListPost />
        <Sub />
      </MainReddits>
    </>
  );
};

export default Home;
