import React, { createContext, useState } from "react";
import api from "../services/api";

export const GithubContext = createContext({});

const GithubProvider = (props) => {
  const [user, setUser] = useState({});
  const [perfilGithub, setPerfilGithub] = useState({});
  const [modalLogin, setModalLogin] = useState(true);
  const [modalRegister, setModalRegister] = useState(false);
  const userAuth = {
    nome: "admin",
    email: "admin@admin.com",
    senha: "admin",
  };

  const searchPerfil = async (inputSearch) => {
    try {
      const data = await api.get(`/search/users?q=${inputSearch}`);
      const nameResult = data.data.items[0].login;
      const result = await api.get(`/users/${nameResult}`);
      setPerfilGithub(result.data);
    } catch (error) {
      setPerfilGithub("Perfil não encontrado");
    }
  };

  return (
    <GithubContext.Provider
      value={{
        //Usuario atual
        user,
        setUser,
        //Pesquisa de perfil
        perfilGithub,
        setPerfilGithub,
        searchPerfil,
        //Controle de modal
        modalLogin,
        setModalLogin,
        modalRegister,
        setModalRegister,
        //Usuario autenticado
        userAuth,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubProvider;
