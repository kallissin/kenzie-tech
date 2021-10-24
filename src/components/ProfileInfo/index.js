import { useState } from "react";
import { Display, Container, Header, Content } from "./styles";
import ImageProfile from "../../assets/kelvin.jpg";
import { Button } from "../Button";
import { GoGear } from "react-icons/go";

const ProfileInfo = () => {
  const [edit, setEdit] = useState(false);

  return (
    <Display>
      <Container>
        <div className="content-box">
          <Header>
            <figure>
              <img src={ImageProfile} alt="Profile" />
              <figcaption>Detalhe da imagem</figcaption>
            </figure>
            <div>
              <span className="header__icon">
                <GoGear />
              </span>
            </div>
          </Header>
          {edit ? (
            <Content>
              <div>
                <p>
                  <span>Name: </span>Kelvin Alisson Cantarino
                </p>
              </div>
              <div>
                <p>
                  <span>Email: </span>Kelvin@email.com
                </p>
              </div>
              <div>
                <p>
                  <span>Contact: </span>linkdin/in/kallissin
                </p>
              </div>
              <div>
                <p>
                  <span>Bio: </span>Estudando Análise e Desenvolvimento de
                  Sistemas
                </p>
              </div>
              <div className="container-button">
                <Button>Editar</Button>
              </div>
            </Content>
          ) : (
            <Content>
              <form>
                <div>
                  <input
                    className="form-input"
                    value="Kelvin Alisson Cantarino"
                  />
                </div>
                <div>
                  <input className="form-input" value="Kelvin@email.com" />
                </div>
                <div>
                  <input className="form-input" value="linkdin/in/kallissin" />
                </div>
                <div>
                  <textarea
                    className="form-input textarea"
                    value="Estudando Análise e Desenvolvimento de
                Sistemas"
                  />
                </div>
                <div>
                  <Button>Salvar</Button>
                </div>
              </form>
            </Content>
          )}
        </div>
      </Container>
    </Display>
  );
};

export default ProfileInfo;
