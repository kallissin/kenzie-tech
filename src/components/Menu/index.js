import { ContainerMenu, Button, LogoNavigation, Nav } from "./styles";
import { MdClose, MdMenu } from "react-icons/md";
import { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../providers/users";

const Menu = () => {
  const [open, setOpen] = useState(false);

  const { setToken } = useContext(UserContext);

  const handleOpen = (open) => {
    setOpen(!open);
  };

  const handleExit = (open) => {
    handleOpen(open);
    localStorage.clear();
    setToken("");
    return <Redirect to="/login" />;
  };

  return (
    <>
      <Button onClick={() => handleOpen(open)}>
        {!open ? (
          <MdMenu size="50" color="#000" />
        ) : (
          <MdClose size="50" color="#fff" />
        )}
      </Button>
      <ContainerMenu className={open ? "open" : ""}>
        <LogoNavigation
          to="/dashboard"
          onClick={() => handleOpen(open)}
          className="logo"
        >
          KenzieTech
        </LogoNavigation>
        <Nav>
          <ul>
            <li>
              <Link to="/" onClick={() => handleOpen(open)}>
                Add Technology
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleExit(open)}>
                Exit
              </Link>
            </li>
          </ul>
        </Nav>
      </ContainerMenu>
    </>
  );
};

export default Menu;
