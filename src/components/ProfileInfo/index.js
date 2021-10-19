import { useState } from "react";
import { Container } from "./styles";

const ProfileInfo = () => {
  const [edit, setEdit] = useState(true);

  return (
    <Container>
      <h2>Componente ProfileInfo</h2>
      <figure>
        <img src="#" alt="Profile" />
        <figcaption>Detalhe da imagem</figcaption>
      </figure>
      {edit ? (
        <>
          <p>
            <span>Name:</span>Kelvin Alisson Cantarino
          </p>
          <p>
            <span>Email:</span>Kelvin@email.com
          </p>
          <p>
            <span>Contact:</span>linkdin/in/kallissin
          </p>
          <p>
            <span>Bio:</span>Estudando Análise e Desenvolvimento de Sistemas
          </p>
          <button>Enviar</button>
        </>
      ) : (
        <form>
          <div>
            <input></input>
          </div>
          <div>
            <input></input>
          </div>
          <div>
            <input></input>
          </div>
          <div>
            <input></input>
          </div>
          <button>Salvar</button>
        </form>
      )}
    </Container>
  );
};

export default ProfileInfo;
