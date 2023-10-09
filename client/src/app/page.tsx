import Header from "~/components/header/header";
import MainReddits from "~/components/main/main";

const Home: React.FC<ChildNode> = ({ children }: any) => {
  return (
    <>
      <Header />
      <MainReddits>{children}</MainReddits>
    </>
  );
};

export default Home;
