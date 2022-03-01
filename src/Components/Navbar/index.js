import * as S from "./style";
import { Link } from "react-router-dom";
import { GithubContext } from "../../providers/githubProvider";
import { useContext } from "react";

const Navbar = () => {
  const { userAuth } = useContext(GithubContext);

  return (
    <S.NavGlobal>
      <S.NavUser>
        <S.infoWeb>
          <S.titleHvex>
            &lt;HVEX<S.spanTitle>LABS/&gt;</S.spanTitle>
          </S.titleHvex>
          <S.infoNameLogout>
            <S.infoNameUser>{userAuth.nome}</S.infoNameUser>
            <S.Bar></S.Bar>

            <Link to="/">
              <S.BtnLogout>Sair</S.BtnLogout>
            </Link>
          </S.infoNameLogout>
        </S.infoWeb>
        <S.infoNameMobile>{userAuth.nome}</S.infoNameMobile>
      </S.NavUser>
    </S.NavGlobal>
  );
};

export default Navbar;
