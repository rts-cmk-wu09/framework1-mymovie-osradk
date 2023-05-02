import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import styled from "styled-components";


const StyledArticle= styled.article`
height:283px;
display:flex;
flex-direction:column;
justify-content:space-between;


`;

const MovieCard = (props) => {
    return (
  <StyledArticle>
        <figure>
<Image width="143" height="212"/>

</figure>
<Heading title={props.title} size="14"  as="h3"/>

<MovieRating />

        </StyledArticle>
   );
};
 
export default MovieCard;