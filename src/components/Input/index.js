import { Container, Content } from "./styles";

export const Input = ({ icon: Icon, label, ...rest }) => {
  return (
    <Container>
      <div>{Icon && <Icon size={30} />}</div>
      <Content>
        <div>{label}</div>
        <input {...rest}></input>
      </Content>
    </Container>
  );
};
