import { Container, Background } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import { TechsContext } from "../../providers/techs";
export const NotFound = () => {
  const history = useHistory();
  const { token } = useContext(TechsContext);

  const handleClick = () => {
    if (!!token) {
      return history.push("/dashboard");
    }

    return history.push("/");
  };

  return (
    <Container>
      <Background />
      <h1>Página não encontrada</h1>
      <Button onClick={handleClick}>Voltar</Button>
    </Container>
  );
};
