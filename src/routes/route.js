import { useContext, useState } from "react";
import { UserContext } from "../providers/users";
import { Redirect, Route as ReactDOMRoute } from "react-router";

const Route = ({ isPrivate = false, component: Component, ...rest }) => {
  const { token } = useContext(UserContext);
  const [authId] = useState(JSON.parse(localStorage.getItem("authId")))
  
  return (
    <ReactDOMRoute
      {...rest}
      render={() => {
        return isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/login" : `/dashboard/${authId}`} />
        );
      }}
    />
  );
};

export default Route;
