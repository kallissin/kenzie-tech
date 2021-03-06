import { createContext, useContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
import { UserContext } from "../users";

export const TechsContext = createContext();

export const TechsProvider = ({ children }) => {
  const [techs, setTechs] = useState([]);

  const { token } = useContext(UserContext);

  const loadTech = (id) => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((err) => console.log(err));
  };

  const createTech = (data, id) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia cadastrada!");
        console.log(id)
        loadTech(id);
      })
      .catch((err) => {
        toast.error("Tecnologia já esta cadastrada!");
      });
  };

  const deleteTech = (id, authId) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.warning("Tecnologia deletada!");
        loadTech(authId);
      })
      .catch((err) => console.log(err));
  };

  const updateTech = (data, id, authId) => {
    api
      .put(`/users/techs/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia atualiza!");
        loadTech(authId);
      });
  };

  return (
    <TechsContext.Provider
      value={{ loadTech, techs, setTechs, createTech, deleteTech, updateTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};
