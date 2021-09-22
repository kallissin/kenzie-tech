/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "../../components/Card";
import { MenuContainer, TextContainer } from "./styles";
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { TechsContext } from "../../providers/techs";
import FormDashboard from "../../components/FormDashboard";

export const Dashboard = () => {
  const [id, setId] = useState(
    JSON.parse(localStorage.getItem("authId")) || ""
  );

  const { techs, loadTech, deleteTech } = useContext(TechsContext);

  useEffect(() => {
    setId(JSON.parse(localStorage.getItem("authId")) || "");
    loadTech(id);
  }, []);

  return (
    <>
      <Header>
        {/*<ImExit onClick={handleExit} />
        <MenuContainer>
          <div>
            <h1>KenzieTech</h1>
          </div>
          <FormDashboard id={id} />
        </MenuContainer>*/}
      </Header>
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
