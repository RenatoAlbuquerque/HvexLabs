import { useContext } from "react";
import Navbar from "../../Components/Navbar";
import Search from "../../Components/Search";
import UserResult from "../../Components/UserResult";
import { GithubContext } from "../../providers/githubProvider";
import "./style.scss";

const Dashboard = () => {
  const { perfilGithub } = useContext(GithubContext);

  return (
    <div className="resetDashboard">
      <Navbar />
      <Search />
      {perfilGithub.id ? (
        <UserResult />
      ) : (
        <div className="resultsEmpty">
          <h1>Não há resultados no momento.</h1>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
