//children   children: ReactNode;
interface Props {
  children: React.ReactNode;
}
const HomeLayout: React.FC<Props> = ({ children }) => {
  console.log("Home");
  return (
    <div>
      <h1>Home Layout</h1>
      {children}
    </div>
  );
};
export default HomeLayout;
