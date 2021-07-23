import { Container, Content, Background } from "./styles";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers";
import { useForm } from "react-hook-form";
import {
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";

export const Register = () => {
  return (
    <Container>
      <Background />
      <Content>
        <form>
          <h1>Cadastro</h1>
          <Input
            icon={IoPersonOutline}
            label="Nome"
            placeholder="Seu nome Completo"
          />
          <Input
            icon={IoMailOutline}
            label="Email"
            placeholder="Seu melhor email"
          />
          <Input
            icon={IoLockClosedOutline}
            label="Senha"
            placeholder="Sua melhor senha"
          />
          <Input
            icon={IoLockClosedOutline}
            label="Confirmação da Senha"
            placeholder="Confirme sua senha"
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
