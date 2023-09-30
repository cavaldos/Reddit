
import  store from "~/redux/store";

import { useSelector } from "react-redux";
const SiginPage: React.FC = () => {
  const state = useSelector((state:any) => state);
  console.log(state);

  return (
    <>
        <h1> SiginPage</h1>
    </>
  );
};

export default SiginPage;
