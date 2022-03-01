import * as S from "./style";
import { createGlobalStyle } from "styled-components";
import { GithubContext } from "../../providers/githubProvider";
import { useContext } from "react";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }`;

const UserResult = () => {
  const { perfilGithub } = useContext(GithubContext);
  return (
    <S.ResultGlobal>
      <GlobalStyle />
      <S.ResultUser>
        <S.ContainerResult>
          <S.CollumnContainerOne>
            <S.ImageUser src={perfilGithub.avatar_url} />
          </S.CollumnContainerOne>
          <S.CollumnContainerTwo>
            <S.CtwoSessionOne>
              <S.InfoUser>
                <S.InfoUsername>{perfilGithub.login}</S.InfoUsername>
                <S.InfoEmail>
                  {perfilGithub.email ? perfilGithub.email : perfilGithub.blog}
                </S.InfoEmail>
              </S.InfoUser>
              <S.InfoRepository>
                <S.QuantRep>
                  {perfilGithub.public_repos}
                  <S.CompleteRep> Rep. Públicos</S.CompleteRep>
                </S.QuantRep>
              </S.InfoRepository>
            </S.CtwoSessionOne>

            <S.CtwoSessionTwo>
              <S.STwoRowOne>
                <S.InfoCity>De:</S.InfoCity>
                <S.SpanCity>
                  {perfilGithub.location
                    ? perfilGithub.location
                    : "O usuário não preencheu sua localização"}
                </S.SpanCity>
              </S.STwoRowOne>
              <S.STwoRowTwo>
                <S.InfoBio>Bio:</S.InfoBio>
                <S.SpanBio>
                  {perfilGithub.bio
                    ? perfilGithub.bio
                    : "O usuário não escreveu sua Bio."}
                </S.SpanBio>
              </S.STwoRowTwo>
              <S.BtnOriginalPerfil
                href={perfilGithub.html_url}
                target="_blank"
                rel="external"
              >
                Acessar Perfil
              </S.BtnOriginalPerfil>
            </S.CtwoSessionTwo>
          </S.CollumnContainerTwo>
        </S.ContainerResult>
      </S.ResultUser>
    </S.ResultGlobal>
  );
};

export default UserResult;
