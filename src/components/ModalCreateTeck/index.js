import {
  Display,
  Container,
  Content,
  ContainerInput,
  ContainerInputSelect,
} from "./styles";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techs";
import { UserContext } from "../../providers/users";
import { useState, useContext } from "react";

import { SiReactos } from "react-icons/si";
import { RiArrowUpDownFill } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import { Button } from "../Button";
import { Input } from "../Input";

const ModalCreateTeck = ({ showModal, setShowModal }) => {
  const [inputValue, setInputValue] = useState("Iniciante");

  const { createTech } = useContext(TechsContext);
  const { authId } = useContext(UserContext);

  const { register, handleSubmit } = useForm();

  const onSubmitFunction = (data) => {
    console.log(data);
    if (data.title === "") {
      return toast.error("Digite um valor válido");
    }
    createTech(data, authId);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClosed = () => {
    setShowModal(!showModal);
  };

  return (
    <Display>
      <Container>
        <Content>
          <div className="box-title">
            <GrFormClose
              size={30}
              className="icon-close"
              onClick={handleClosed}
            />
            <h3 className="text">New Technology</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <ContainerInput>
              <Input
                placeholder="Ex: React"
                register={register}
                name="title"
                label="Tecnologia"
                icon={SiReactos}
              />
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
            </ContainerInput>
          </form>
        </Content>
      </Container>
    </Display>
  );
};

export default ModalCreateTeck;
