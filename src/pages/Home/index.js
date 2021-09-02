import { Container, Content } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

export const Home = () => {
  const history = useHistory();

  const handleClick = (page) => {
    history.push(page);
  };

  return (
    <Container>
      <Content>
        <h1>Kenzie Tech</h1>
        <p>Registre as suas Tecnologias e o nível de experiencia</p>
        <div>
          <Button whiteSchema={"gray"} onClick={() => handleClick("/register")}>
            Cadastre-se
          </Button>
          <Button onClick={() => handleClick("/login")}>Login</Button>
        </div>
      </Content>
    </Container>
  );
};
