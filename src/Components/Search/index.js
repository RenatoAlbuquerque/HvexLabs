import * as S from "./style";
import { VscSearch } from "react-icons/vsc";
import { useContext, useState } from "react";
import api from "../../services/api";
import { GithubContext } from "../../providers/githubProvider";

const Search = () => {
  const [inputSearch, setInputSearch] = useState("");
  const { searchPerfil } = useContext(GithubContext);

  const acharPerfil = (e) => {
    e.preventDefault();
    searchPerfil(inputSearch);
  };

  return (
    <S.SearchGlobal>
      <S.searchUser>
        <S.textHelpSearch>Digite nome do usuário ou e-mail:</S.textHelpSearch>
        <S.formSearch onSubmit={acharPerfil}>
          <S.inputSearch
            onChange={(e) => setInputSearch(e.target.value)}
            value={inputSearch}
          />
          <S.BtnSearch>
            <VscSearch />
          </S.BtnSearch>
        </S.formSearch>
      </S.searchUser>
    </S.SearchGlobal>
  );
};

export default Search;
