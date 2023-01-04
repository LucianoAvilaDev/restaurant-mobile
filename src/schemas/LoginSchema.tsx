import { object, string } from "yup";

export const LoginSchema = () => {
  return object({
    email: string().required("Campo obrigatório!").email("E-mail inválido"),
    password: string().required("Campo obrigatório!"),
  });
};
