import { ContainerMenu, Button, LogoNavigation, Nav, Icon } from "./styles";
import { MdClose, MdMenu } from "react-icons/md";
import { useState, useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import { UserContext } from "../../providers/users";
import ModalCreateTeck from "../ModalCreateTeck";
import { HiViewGridAdd } from "react-icons/hi";
import { ImExit } from "react-icons/im";

const Menu = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const handleModalCreateTeck = (open) => {
    setShowModal(!showModal);
    handleOpen(open);
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
          to={(location) => location}
          onClick={() => handleOpen(open)}
          className="logo"
        >
          KenzieTech
        </LogoNavigation>
        <Nav>
          <ul>
            <li>
              <Link
                to={(location) => location}
                onClick={() => handleModalCreateTeck(open)}
              >
                <Icon>
                  <HiViewGridAdd />
                </Icon>
                Add Technology
              </Link>
            </li>
            <li>
              <Link to="/" onClick={() => handleExit(open)}>
                <Icon>
                  <ImExit />
                </Icon>
                Exit
              </Link>
            </li>
          </ul>
        </Nav>
      </ContainerMenu>

      {showModal && (
        <ModalCreateTeck showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Menu;
