import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";
import ListPost from "~/components/post/listpost";
import Sub from "~/components/post/sub";
import ChatBox from "~/components/chat/chatbox";
import AuthProvider from "~/utils/AuthContext";
const Home: React.FC = () => {
  return (
    <>
      <AuthProvider>
        <ChatBox />
        <Header />
        <MainReddits>
          <ListPost />
          <Sub />
        </MainReddits>
      </AuthProvider>
    </>
  );
};

export default Home;
