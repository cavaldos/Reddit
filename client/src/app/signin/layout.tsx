import Header from "~/components/header/header";
import { useSelector } from "react-redux";
interface Props {
  children: React.ReactNode;
}

const SigninLayout: React.FC<Props> = ({ children }) => {
  const user = useSelector((state: any) => state);
  console.log("user", user);
  return (
    <>
      <div className="test">{children}</div>
    </>
  );
};

export default SigninLayout;
