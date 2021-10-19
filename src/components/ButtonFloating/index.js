import { Container } from "./styles";

import { AiOutlineCaretUp } from "react-icons/ai";

const ButtonFloating = () => {
  const handleClick = () => {
    document.getElementById("scroller").scroll(0, 0);
  };

  return (
    <Container>
      <span>
        <button onClick={handleClick}>
          <AiOutlineCaretUp />
        </button>
      </span>
    </Container>
  );
};

export default ButtonFloating;
