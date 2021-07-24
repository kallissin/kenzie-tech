import { Container, Content } from "./styles";

export const Input = ({
  icon: Icon,
  label,
  error = "",
  name,
  register,
  ...rest
}) => {
  return (
    <Container error={!!error}>
      <div>{Icon && <Icon size={30} />}</div>
      <Content>
        <div>
          {label}
          {!!error && <span> - {error}</span>}
        </div>
        <input {...register(name)} {...rest}></input>
      </Content>
    </Container>
  );
};
