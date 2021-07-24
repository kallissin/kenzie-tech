import { Container, Content, Background } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

export const Register = () => {
  const schema = yup.object().shape({
    name: yup.string().required("Campo obrigatório"),
    email: yup.string().required("Campo obrigatório").email("Email inválido"),
    bio: yup.string().required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    courseModule: yup.string().required("Campo obrigatório"),
    password: yup
      .string()
      .required("Campo obrigatório")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "Senha fraca"
      ),
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

  const onSubmitFunction = (data) => {
    console.log(data);
  };

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
            name="courseModule"
            error={errors.courseModule?.message}
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
