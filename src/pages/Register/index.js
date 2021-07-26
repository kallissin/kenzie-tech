import { Container, Content, Background } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory, Redirect } from "react-router-dom";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

import api from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

toast.configure();

export const Register = ({ authenticate }) => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    course_module: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .min(6, "Mínimo 6 dígitos"),
    passwordConfirm: yup
      .string()
      .required("Campo obrigatório")
      .oneOf([yup.ref("password")], "Senha diferente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    console.log(data);
    const { passwordConfirm, ...newData } = data;

    api
      .post("/users", newData)
      .then((_) => {
        toast.success("Usuário registrado com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return history.push("/login");
      })
      .catch((_) =>
        toast.error("Email já cadastrado!", {
          posição: "superior direito",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          arrastável: true,
          progresso: undefined,
        })
      );
  };

  if (authenticate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Cadastro</h1>
          <Input
            icon={IoPersonOutline}
            label="Nome"
            placeholder="Seu nome Completo"
            autoComplete="off"
            register={register}
            name="name"
            error={errors.name?.message}
          />
          <Input
            icon={IoMailOutline}
            label="Email"
            placeholder="Seu melhor email"
            autoComplete="off"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            icon={IoPersonOutline}
            label="Bio"
            placeholder="Digite uma descrição"
            autoComplete="off"
            register={register}
            name="bio"
            error={errors.bio?.message}
          />
          <Input
            icon={IoPersonOutline}
            label="Contato"
            placeholder="Ex: linkedin/in/nome"
            autoComplete="off"
            register={register}
            name="contact"
            error={errors.contact?.message}
          />
          <Input
            icon={IoPersonOutline}
            label="Modulo do curso"
            placeholder="Ex: 2º Modulo(Frontend avançado)"
            autoComplete="off"
            register={register}
            name="course_module"
            error={errors.course_module?.message}
          />
          <Input
            icon={IoLockClosedOutline}
            label="Senha"
            placeholder="Sua melhor senha"
            autoComplete="off"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Input
            icon={IoLockClosedOutline}
            label="Confirmação da Senha"
            placeholder="Confirme sua senha"
            autoComplete="off"
            register={register}
            name="passwordConfirm"
            error={errors.passwordConfirm?.message}
          />
          <Button>Enviar</Button>
          <Link to="/login">
            Já tem uma conta? Faça <span>Login</span>
          </Link>
        </form>
      </Content>
    </Container>
  );
};
