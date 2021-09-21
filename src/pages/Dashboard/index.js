/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import {
  MenuContainer,
  ContainerInput,
  Container,
  TextContainer,
  ContainerInputSelect,
} from "./styles";
import { useForm } from "react-hook-form";
import { SiReactos } from "react-icons/si";
import { ImExit } from "react-icons/im";
import { toast } from "react-toastify";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { TechsContext } from "../../providers/techs";
import { UserContext } from "../../providers/users";

export const Dashboard = () => {
  const { register, handleSubmit } = useForm();
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("authId")) || ""
  );
  const [inputValue, setInputValue] = useState("Iniciante");

  const { techs, loadTech, createTech, deleteTech } = useContext(TechsContext);
  const { setToken } = useContext(UserContext);

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("authId")) || "");
    loadTech(id);
  }, []);

  const onSubmitFunction = (data) => {
    if (data.title === "") {
      return toast.error("Digite um valor válido");
    }
    createTech(data, id);
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleExit = () => {
    localStorage.clear();
    setToken("");
    return <Redirect to="/login" />;
  };

  return (
    <>
      <Container>
        <ImExit onClick={handleExit} />
        <MenuContainer>
          <div>
            <h1>KenzieTech</h1>
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
          </form>
        </MenuContainer>
      </Container>
      <TextContainer>
        <section>
          {!!techs &&
            techs.map((tech) => (
              <Card
                key={tech.id}
                tech={tech.title}
                exp={tech.status}
                onClick={() => deleteTech(tech.id)}
              />
            ))}
        </section>
      </TextContainer>
    </>
  );
};
