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
import api from "../../services/api";

export const Dashboard = ({ authenticate, setAuthenticate }) => {
  const [techs, setTechs] = useState([]);
  const [token] = useState(JSON.parse(localStorage.getItem("authToken")) || "");
  const [id] = useState(JSON.parse(localStorage.getItem("authId")) || "");
  const [isOnline, setIsOnline] = useState(true);
  const { register, handleSubmit } = useForm();

  const [inputValue, setInputValue] = useState("Iniciante");

  toast.configure();

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

    return () => {
      fnc_cleanUp();
    };
  }, []);

  const fnc_cleanUp = () => {
    setTechs([]);
  };

  const onSubmitFunction = (data) => {
    console.log(data);
    if (data.title === "") {
      return toast.error("Digite um valor válido", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia cadastrada!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        loadTech();
      })
      .catch((err) => {
        toast.error("Tecnologia já esta cadastrada!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleDelete = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.warning("Tecnologia deletada!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
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
