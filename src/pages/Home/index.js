import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/register");
  };

  return (
    <Container>
      <Content>
        <h1>Kenzie Tech</h1>
        <p>Registre as suas Tecnologias e o nível de experiencia</p>
        <div>
          <Button whiteSchema={"gray"} onClick={handleClick}>
            Cadastre-se
          </Button>
          <Button>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
