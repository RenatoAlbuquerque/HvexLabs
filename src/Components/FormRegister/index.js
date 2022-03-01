import { Formik, ErrorMessage } from "formik";
import { useContext } from "react";
import { GithubContext } from "../../providers/githubProvider";
import "./style.scss";
import schema from "./Schema";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);
const alertSucessRegister = (user) => {
  Swal.fire({
    icon: "success",
    title: `Usuário cadastrado com sucesso. Bem vindo(a) ${user.name}!`,
    showConfirmButton: false,
    timer: 1500,
  });
};

const FormRegister = () => {
  const { setModalLogin, setModalRegister } = useContext(GithubContext);

  const openLogin = () => {
    setModalRegister(false);
    setModalLogin(true);
  };

  const onSubmit = (values) => {
    alertSucessRegister(values);
    openLogin();
  };

  return (
    <main id="Register">
      <Formik
        initialValues={{
          name: "",
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
            <div className="inputsRegister">
              <div className="userRegisterName">
                <label htmlFor="name_Register">Nome</label>
                <input
                  type="name"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Nome"
                />
                <span>
                  <ErrorMessage name="name" />
                </span>
              </div>
              <div className="userRegisterEmail">
                <label htmlFor="email_Register">E-mail</label>
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

              <div className="userRegisterPassword">
                <label htmlFor="password_Register">Senha</label>
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
                Criar Conta
              </button>
            </div>
          </form>
        )}
      </Formik>

      <div className="register">
        <button className="btnSubmit" onClick={openLogin}>
          Fazer Login
        </button>
      </div>
    </main>
  );
};

export default FormRegister;
