import styled from "styled-components";
import { FaStar } from "react-icons/fa"
import CategoryLabel from "./CategoryLabel";

const StyledFaStar = styled(FaStar)`
color: #ffc319;
font-size:12px;
margin-right:4px;
`
const StyledP = styled.p`
color: #9c9c9c; 
font-size:12px;
`
const StyledDiv =styled.div`
display:flex;

`


const MovieRating = () => {
    return (
        <StyledDiv>
          <StyledFaStar />
          <StyledP>9.1/10 IMDb</StyledP>
        </StyledDiv>
      );
}
 
export default MovieRating;