import { useContext } from "react";
import FormLogin from "../../Components/FormLogin";
import FormRegister from "../../Components/FormRegister";
import { GithubContext } from "../../providers/githubProvider";
import "./style.scss";

const Home = () => {
  const { modalLogin } = useContext(GithubContext);
  return (
    <div className="background">
      {modalLogin === true ? <FormLogin /> : <FormRegister />}
    </div>
  );
};

export default Home;
