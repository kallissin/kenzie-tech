import { Background, Container, Content } from "./styles";
import FormLogin from "../../components/FormLogin";

export const Login = () => {
  return (
    <Container>
      <Background />
      <Content>
        <FormLogin />
      </Content>
    </Container>
  );
};
