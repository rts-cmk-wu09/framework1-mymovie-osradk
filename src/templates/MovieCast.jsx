import Actor from "../components/Actor";
import SeeMoreButton from "../components/SeeMoreButton"
import Heading from "../components/Heading";
import styled from "styled-components";

const StyledDiv = styled.div`
display: flex;
justify-content:space-between;
margin-top:16px;

`


const MovieCast = () => {
    return ( 
<>
        <div className="flexcontainer justify">
        <Heading title="Cast" size="16" as="h2"/>
        <SeeMoreButton title="Se More" margin="24" />
      </div>
    <StyledDiv>
      <Actor/>
      <Actor/> 
      <Actor/>
      <Actor/>
      </StyledDiv>
      </>
     );
}
 
export default MovieCast;
