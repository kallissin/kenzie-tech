import { Container, Content } from "./styles";
import { Button } from "../Button";
import { MdEdit } from "react-icons/md";

export const Card = ({ tech, exp, onClick }) => {
  const handleEdit = () => {};

  return (
    <Container>
      <span className="icon-edit">
        <button onClick={handleEdit}>
          <MdEdit size={25} />
        </button>
      </span>
      <Content>
        <p className="content__title">{tech}</p>
        <p className="content__status">{exp}</p>
        <Button onClick={onClick}>Excluir</Button>
      </Content>
    </Container>
  );
};
