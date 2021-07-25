/* eslint-disable react-hooks/exhaustive-deps */
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Card } from "../../components/Card";
import {
  MenuContainer,
  ContainerInput,
  Container,
  TextContainer,
} from "./styles";
import { useForm } from "react-hook-form";
import { SiReactos } from "react-icons/si";
import { GiBattery100 } from "react-icons/gi";
import { ImExit } from "react-icons/im";
import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import api from "../../services/api";

export const Dashboard = ({ authenticate, setAuthenticate }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("authToken")) || "");
  const [id] = useState(JSON.parse(localStorage.getItem("authId")) || "");

  const { register, handleSubmit } = useForm();

  const loadTech = () => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadTech();
  }, []);

  const onSubmitFunction = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log("registrado com sucesso");
        loadTech();
      })
      .catch((err) => console.log(err));
  };

  const handleDelete = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        loadTech();
      })
      .catch((err) => console.log(err));
  };

  const handleExit = () => {
    localStorage.clear();
    setAuthenticate(false);
    return <Redirect to="/login" />;
  };

  if (!authenticate) {
    return <Redirect to="/" />;
  }

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
              <Input
                placeholder="Ex: básico"
                register={register}
                name="status"
                label="Nível de experiencia"
                icon={GiBattery100}
              />
              <Button type="submit">Enviar</Button>
            </ContainerInput>
          </form>
        </MenuContainer>
      </Container>
      <TextContainer>
        <section>
          {techs.map((tech) => (
            <Card
              key={tech.id}
              tech={tech.title}
              exp={tech.status}
              onClick={() => handleDelete(tech.id)}
            />
          ))}
        </section>
      </TextContainer>
    </>
  );
};
