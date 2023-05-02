import Image from "../components/Image";
import Heading from "../components/Heading";
import MoviePopular from "../components/MoviePopular";
import styled from "styled-components";
import CategoryLabel from "../components/CategoryLabel";
import MovieRating from "../components/MoviePopular";
import Time from "../components/Time";



const StyledArticleP= styled.article`

display:flex;
flex-direction:grow;
gap:20px;

`;

const MovieItem= (props) => {
    return (
  <StyledArticleP>
        <figure>
<Image width="85" height="120"/>
</figure>
<div>
<Heading title={props.title} size="14" padding="15" paddingLeft="19"  as="h3"/>
<MoviePopular />

<div className="containerLabel">
<CategoryLabel title="HORROR"/>
<CategoryLabel title="MYSTERY"/>
<CategoryLabel title="THRILER"/>
<Time/>
</div>

</div>

        </StyledArticleP>
   );
};
 
export default MovieItem;