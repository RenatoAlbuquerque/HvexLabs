import { Formik, ErrorMessage } from "formik";
import { useContext, useState } from "react";
import { GithubContext } from "../../providers/githubProvider";
import "./style.scss";
import schema from "./Schema";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const MySwal = withReactContent(Swal);
const alertSucessLogin = (user) => {
  Swal.fire({
    icon: "success",
    title: `Login efetuado com sucesso. Bem vindo`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const alertFailLogin = (infoFail) => {
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: `O ${infoFail} está incorreto!`,
  });
};

const FormLogin = () => {
  const { setModalLogin, userAuth } = useContext(GithubContext);
  const navigate = useNavigate();

  const openRegister = () => {
    setModalLogin(false);
  };

  const onSubmit = (values) => {
    if (values.email !== userAuth.email) {
      return alertFailLogin("email");
    }

    if (values.password !== userAuth.senha) {
      return alertFailLogin("password");
    }

    alertSucessLogin(values);
    navigate("/dashboard");
  };

  return (
    <main id="login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={schema}
        onSubmit={onSubmit}
      >
        {({ values, isValid, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <h1>
              &lt;HVEX<span>LABS/&gt;</span>
            </h1>
            <div className="inputsLogin">
              <div className="userLoginEmail">
                <label htmlFor="email_login">E-mail</label>

                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  placeholder="dev.user@example.com"
                />
                <span>
                  <ErrorMessage name="email" />
                </span>
              </div>

              <div className="userLoginPassword">
                <label htmlFor="password_login">Senha</label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  placeholder="********"
                />
                <span>
                  <ErrorMessage name="password" />
                </span>
              </div>
            </div>
            <div className="btnSubmit">
              <button type="submit" disabled={!isValid}>
                Login
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="register">
        <button className="btnSubmit" onClick={openRegister}>
          Registrar
        </button>
      </div>
    </main>
  );
};

export default FormLogin;
