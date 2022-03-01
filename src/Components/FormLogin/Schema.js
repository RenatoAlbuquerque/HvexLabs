import * as Yup from "yup";

export default Yup.object().shape({
  email: Yup.string()
    .email("Insira um formato de e-mail válido!")
    .min(10, "O minimo de caracteres permitido são 10.")
    .required("O Preenchimento do Email é obrigatório!"),
  password: Yup.string()
    .min(5, "O minimo de caracteres permitido são 5.")
    .required("Insira uma senha!"),
});
