import { Container, TextTech, TextExp } from "./styles";
import { Button } from "../Button";
export const Card = ({ tech, exp, onClick }) => {
  return (
    <Container>
      <TextTech>{tech}</TextTech>
      <TextExp>{exp}</TextExp>
      <Button onClick={onClick}>Excluir</Button>
    </Container>
  );
};
