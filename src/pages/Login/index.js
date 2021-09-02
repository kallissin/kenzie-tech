import { Background, Container, Content } from "./styles";

import { Link, useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";
import { useContext } from "react";
import { UserContext } from "../../providers/users";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    password: yup.string().required("Campo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const { login } = useContext(UserContext);
  const history = useHistory();

  const onSubmitFunction = (data) => {
    login(data);
    history.push("/dashboard");
  };

  return (
    <Container>
      <Background />
      <Content>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Login</h1>
          <Input
            icon={IoMailOutline}
            label="Email"
            placeholder="Seu email"
            autoComplete="off"
            register={register}
            name="email"
            error={errors.email?.message}
          />
          <Input
            icon={IoLockClosedOutline}
            label="Senha"
            placeholder="Sua senha"
            autoComplete="off"
            register={register}
            name="password"
            error={errors.password?.message}
          />
          <Button>Entrar</Button>
          <Link to="/register">
            Não tem uma conta? Faça seu <span>Cadastro</span>
          </Link>
        </form>
      </Content>
    </Container>
  );
};
