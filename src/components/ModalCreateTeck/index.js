import {
  Display,
  Container,
  Form,
  ContainerInput,
  ContainerInputSelect,
} from "./styles";

import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techs";
import { UserContext } from "../../providers/users";
import { useState, useContext } from "react";

import { SiReactos } from "react-icons/si";
import { Button } from "../Button";
import { Input } from "../Input";

const ModalCreateTeck = () => {
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

  return (
    <Display>
      <Container>
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <ContainerInput>
            <Input
              placeholder="Ex: React"
              register={register}
              name="title"
              label="Tecnologia"
              icon={SiReactos}
            />
            <ContainerInputSelect>
              <div>
                <label>Nível de experiencia</label>
              </div>
              <div>
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
        </Form>
      </Container>
    </Display>
  );
};

export default ModalCreateTeck;
