import { Container, Content } from "./styles";
import { Button } from "../Button";
import { MdEdit } from "react-icons/md";
import ModalUpdateTeck from "../ModalUpdateTeck";
import { useState } from "react";

export const Card = ({ id, tech, exp, onClick }) => {
  const [showModal, setShowModal] = useState(false);

  const handleEdit = () => {
    setShowModal(!showModal);
  };

  return (
    <>
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
      {showModal && (
        <ModalUpdateTeck
          showModal={showModal}
          setShowModal={setShowModal}
          tech={tech}
          id={id}
        />
      )}
    </>
  );
};
