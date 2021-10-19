/* eslint-disable react-hooks/exhaustive-deps */
import { Card } from "../../components/Card";
import { TextContainer } from "./styles";
import Header from "../../components/Header";
import { useEffect } from "react";
import { useContext } from "react";
import { TechsContext } from "../../providers/techs";
import { useParams } from "react-router";

export const Dashboard = () => {
  const { techs, loadTech, deleteTech } = useContext(TechsContext);

  const { authId } = useParams();

  useEffect(() => {
    console.log(authId);

    loadTech(authId);
  }, [authId]);

  return (
    <>
      <Header />
      <TextContainer>
        <section>
          {!!techs &&
            techs.map((tech) => (
              <Card
                key={tech.id}
                id={tech.id}
                tech={tech.title}
                exp={tech.status}
                onClick={() => deleteTech(tech.id, authId)}
              />
            ))}
        </section>
      </TextContainer>
    </>
  );
};
