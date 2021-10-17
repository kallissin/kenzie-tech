import { Display, Container, Content, ContainerInputSelect } from "./styles";
import { GrFormClose } from "react-icons/gr";
import { RiArrowUpDownFill } from "react-icons/ri";
import { Button } from "../Button";
import { useForm } from "react-hook-form";
import { useState, useContext } from "react";
import { TechsContext } from "../../providers/techs";
import { useParams } from "react-router";

const ModalUpdateTeck = ({ showModal, setShowModal, tech, id }) => {
  const [inputValue, setInputValue] = useState("Iniciante");

  //const { authId } = useContext(UserContext);
  const { updateTech } = useContext(TechsContext);
const { authId } = useParams()
  const { register, handleSubmit } = useForm();

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitFunction = (data) => {
    updateTech(data, id, authId);
    setShowModal(!showModal)
  };

  return (
    <Display>
      <Container>
        <Content>
          <header className="content__header">
            <div className="box-title">
              <GrFormClose
                size={30}
                className="icon-close"
                onClick={handleClosed}
              />
              <h3 className="text">Update Technology</h3>
            </div>
          </header>
          <div className="content__main">
            <h4>
              Technology: <span>{tech}</span>
            </h4>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <ContainerInputSelect>
                <div className="containerIcon">
                  <RiArrowUpDownFill size={30} />
                </div>
                <div className="contentInputSelect">
                  <div>
                    <label>Nível de experiencia</label>
                  </div>
                  <select
                    {...register("status")}
                    value={inputValue}
                    onChange={(e) => handleChange(e)}
                  >
                    <option value="Iniciante">Iniciante</option>
                    <option value="Intermediário">Intermediário</option>
                    <option value="Avançado">Avançado</option>
                  </select>
                </div>
              </ContainerInputSelect>
              <Button type="submit">Enviar</Button>
            </form>
          </div>
        </Content>
      </Container>
    </Display>
  );
};

export default ModalUpdateTeck;
