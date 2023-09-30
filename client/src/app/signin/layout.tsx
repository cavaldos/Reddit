import Header from "~/components/header/header";

interface Props {
  children: React.ReactNode;
}

const SigninLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="test">{children}</div>
    </>
  );
};

export default SigninLayout;
