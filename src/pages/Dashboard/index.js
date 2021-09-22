/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "../../components/Card";
import { MenuContainer, Container, TextContainer } from "./styles";

import { ImExit } from "react-icons/im";

import { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import { TechsContext } from "../../providers/techs";
import { UserContext } from "../../providers/users";
import FormDashboard from "../../components/FormDashboard";

export const Dashboard = () => {
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("authId")) || ""
  );

  const { techs, loadTech, deleteTech } = useContext(TechsContext);

  const { setToken } = useContext(UserContext);

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("authId")) || "");
    loadTech(id);
  }, []);

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
          <FormDashboard id={id} />
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
