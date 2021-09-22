import { ContainerInput, ContainerInputSelect } from "./styles";
import { Input } from "../Input";
import { Button } from "../Button";
import { Form } from "./styles";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { TechsContext } from "../../providers/techs";
import { useState, useContext } from "react";
import { SiReactos } from "react-icons/si";

const FormDashboard = ({ id }) => {
  const { register, handleSubmit } = useForm();

  const [inputValue, setInputValue] = useState("Iniciante");

  const onSubmitFunction = (data) => {
    if (data.title === "") {
      return toast.error("Digite um valor válido");
    }
    createTech(data, id);
  };

  const { createTech } = useContext(TechsContext);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
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
  );
};

export default FormDashboard;
