import { createContext, useState } from "react";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(
    JSON.parse(localStorage.getItem("authToken")) || ""
  );
  const [user, setUser] = useState([]);
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

  const updateUser = (data) => {
    api
      .put("/users/profile", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success("Informações do usuário Atualizado!");
        loadUser();
      });
  };

  const loadUser = () => {
    const id = JSON.parse(localStorage.getItem("authId")) || "";
    api.get(`/users/${id}`).then((res) => {
      const { name, email, contact, bio } = res.data;
      setUser({ name: name, email: email, contact: contact, bio: bio });
    });
  };

  const login = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        const { token } = res.data;
        const { id } = res.data.user;
        localStorage.clear();
        localStorage.setItem("authToken", JSON.stringify(token));
        localStorage.setItem("authId", JSON.stringify(id));
        setToken(token);
        loadUser();
        toast.success("Bem vindo");

        return history.push(`/dashboard/${id}`);
      })
      .catch((err) => toast.error("Email ou senha inválido!"));
  };

  return (
    <UserContext.Provider
      value={{
        createUser,
        login,
        token,
        setToken,
        user,
        setUser,
        loadUser,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
