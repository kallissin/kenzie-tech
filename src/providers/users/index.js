import { createContext } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const history = useHistory();

  const createUser = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        toast.success("Usuário registrado com sucesso!");
        return history.push("/login");
      })
      .catch((_) => toast.error("Email já cadastrado!"));
  };

  const login = (data, setAuthenticate) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const { id } = res.data.user;
        localStorage.clear();
        localStorage.setItem("authToken", JSON.stringify(token));
        localStorage.setItem("authId", JSON.stringify(id));
        toast.success("Bem vindo");
        setAuthenticate(true);

        return history.push("/dashboard");
      })
      .catch((err) => toast.error("Email ou senha inválido!"));
  };

  return (
    <UserContext.Provider value={{ createUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
