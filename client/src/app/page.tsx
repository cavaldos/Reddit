import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import ChatBox from "~/components/chat/chatbox";
const Home: React.FC = () => {
  return (
    <>
      <ChatBox />
      <Header />
      <MainReddits>
        <ListPost />
        <Sub />
      </MainReddits>
    </>
  );
};

export default Home;
