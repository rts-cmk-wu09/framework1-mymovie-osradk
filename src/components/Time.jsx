import styled from "styled-components";
import { FaRegClock } from "react-icons/fa"


const StyledFaClock = styled(FaRegClock)`
color:black;
font-size:12px;

`
const StyledP = styled.p`
color: black; 
margin-left:4px;
font-size:12px;
`
const StyledDiv =styled.div`
display:flex;
margin-top:8px;

`


const Time = () => {
    return (
        <StyledDiv className=" dark:-black ">
          <StyledFaClock />
          <StyledP className= "dark:text-white">1hr 47m</StyledP>
        </StyledDiv>
      );
}
 
export default Time;