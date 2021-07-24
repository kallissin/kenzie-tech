import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, ContainerInput, Menu } from "./styles";
import { useForm } from "react-hook-form";
import { SiReactos } from "react-icons/si";
import { GiBattery100 } from "react-icons/gi";
export const Dashboard = () => {
  const { register, handleSubmit } = useForm();

  return (
    <header>
      <Menu>
        <Container>
          <div>
            <h1>KenzieTech</h1>
          </div>
          <ContainerInput>
            <Input
              placeholder="Ex: React"
              register={register}
              name="tech"
              label="Tecnologia"
              icon={SiReactos}
            />
            <Input
              placeholder="Ex: básico"
              register={register}
              name="tech"
              label="Nível de experiencia"
              icon={GiBattery100}
            />
            <Button>Enviar</Button>
          </ContainerInput>
        </Container>
      </Menu>
    </header>
  );
};
