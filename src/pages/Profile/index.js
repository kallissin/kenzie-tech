import { Display, Container, HeaderProfile, Content } from "./styles";
import { useState, useContext, useEffect } from "react";
import ImageProfile from "../../assets/kelvin.jpg";
import { Button } from "../../components/Button";
import { GoGear } from "react-icons/go";
import FormProfile from "../../components/FormProfile";
import { UserContext } from "../../providers/users";
import Header from "../../components/Header";

const Profile = () => {
  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(!edit);
  };

  const { user, loadUser } = useContext(UserContext);

  useEffect(() => {
    loadUser();
  }, [user]);

  return (
    <>
      <Header />
      <Display>
        <Container>
          <div className="content-box">
            <HeaderProfile>
              <figure>
                <img src={ImageProfile} alt="Profile" />
                <figcaption>Detalhe da imagem</figcaption>
              </figure>
              <div>
                <span className="header__icon">
                  <GoGear />
                </span>
              </div>
            </HeaderProfile>
            {edit ? (
              <Content>
                <div>
                  <p>
                    <span>Name: </span>
                    {user.name}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Email: </span>
                    {user.email}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Contact: </span>
                    {user.contact}
                  </p>
                </div>
                <div>
                  <p>
                    <span>Bio: </span>
                    {user.bio}
                  </p>
                </div>
                <div className="container-button">
                  <Button onClick={handleClick}>Editar</Button>
                </div>
              </Content>
            ) : (
              <Content>
                <FormProfile edit={edit} setEdit={setEdit} />
              </Content>
            )}
          </div>
        </Container>
      </Display>
    </>
  );
};

export default Profile;
