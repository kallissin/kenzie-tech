import { Background, Container, Content } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
//import { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoMailOutline, IoLockClosedOutline } from "react-icons/io5";

import api from "../../services/api";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    //password: yup
    //  .string()
    //  .required("Campo obrigatório")
    //  .matches(
    //    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
    //    "Senha fraca"
    //  ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const history = useHistory();

  const onSubmitFunction = (data) => {
    api.post("/sessions", data).then((res) => {
      const { token } = res.data;
      const { id } = res.data.user;
      localStorage.clear();
      localStorage.setItem("authToken", JSON.stringify(token));
      localStorage.setItem("authId", JSON.stringify(id));

      return history.push("/dashboard");
    });
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
          <Button>Enviar</Button>
          <Link to="/register">
            Não tem uma conta? Faça seu <span>Cadastro</span>
          </Link>
        </form>
      </Content>
    </Container>
  );
};
