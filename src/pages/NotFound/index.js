import { Container, Background } from "./styles";
import { Button } from "../../components/Button";
import { useHistory } from "react-router-dom";

export const NotFound = ({ authenticate }) => {
  const history = useHistory();

  const handleClick = () => {
    if (authenticate) {
      console.log("aqui");
      return history.push("/dashboard");
    }
    console.log("aqui n");

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
