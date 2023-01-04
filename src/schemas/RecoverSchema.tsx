import { object, string } from "yup";

export const RecoverSchema = () => {
  return object({
    email: string().required("Campo obrigatório!").email("E-mail inválido"),
  });
};
