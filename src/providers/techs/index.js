import { createContext, useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";
export const TechsContext = createContext();

export const TechsProvider = ({ children }) => {
  const [token] = useState(JSON.parse(localStorage.getItem("authToken")) || "");

  const [techs, setTechs] = useState([]);

  const loadTech = (id) => {
    api
      .get(`/users/${id}`)
      .then((res) => {
        setTechs(res.data.techs);
      })
      .catch((err) => console.log(err));
  };

  const createTech = (data) => {
    api
      .post("/users/techs", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Tecnologia cadastrada!");
        loadTech();
      })
      .catch((err) => {
        toast.error("Tecnologia já esta cadastrada!");
      });
  };

  const deleteTech = (id) => {
    api
      .delete(`/users/techs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.warning("Tecnologia deletada!");
        loadTech();
      })
      .catch((err) => console.log(err));
  };

  return (
    <TechsContext.Provider
      value={{ loadTech, techs, setTechs, createTech, deleteTech }}
    >
      {children}
    </TechsContext.Provider>
  );
};
