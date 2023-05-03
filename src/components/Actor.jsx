import styled from "styled-components";
import Image from "../components/Image";


const StyledFigure =styled.figure`
flex-basis :20%;


`
const StyledFigCaption=styled.figcaption`
  margin-top: 10px;
  font-size: 12px;
  word-wrap: break-word;

`
const Actor = () => {
    return ( 
<StyledFigure>
    <Image width="72" height="72"/>
    <StyledFigCaption>Name Lastname</StyledFigCaption>
</StyledFigure>
     );
}
 
export default Actor;