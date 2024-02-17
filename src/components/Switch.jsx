import styled from "styled-components";
import ReactSwitch from "react-switch";
import { useOutletContext } from "react-router-dom";
// useOutletContexat håndtere kontekst og deling af data mellem forskellige dele af applikation.
// Dette kan være en måde at styre applikationsniveauet eller globalt state, som f.eks. 
//temaetilstand (dark mode).

const StyledSwitch = styled(ReactSwitch)`
  grid-column-start: 3;
  justify-self: end;
  align-self: center;



`;

const Switch = (props) => {
  const [darkmode, setdarkmode] = useOutletContext();

  const handleChange = () => {
    setdarkmode(!darkmode);
  };
  return (
    <StyledSwitch
      height={21}
      width={38}
      offColor="#AAA9B1"
      onColor="#AAA9B1"
      onHandleColor="#000000"
      uncheckedIcon={false}
      checkedIcon={false}
      checked={darkmode}
      onChange={handleChange}
    />
  );
};

export default Switch;
