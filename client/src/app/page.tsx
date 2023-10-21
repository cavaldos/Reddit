import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import ChatBox from "~/components/chat/chatbox";
import AuthContext from "~/utils/AuthContext";

const Home: React.FC = () => {
  return (
    <>
      <ChatBox />
      <AuthContext>
        <Header />
        <MainReddits>
          <ListPost />
          <Sub />
        </MainReddits>
      </AuthContext>
    </>
  );
};

export default Home;
