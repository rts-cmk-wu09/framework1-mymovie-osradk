import "./App.css";
import DetailImage from "./components/DetailImg";
import { FaRegBookmark } from "react-icons/fa";
import styled from "styled-components";
import CategoryLabel from "./components/CategoryLabel";
import { BsArrowLeft } from "react-icons/bs";
import {BsFillPlayCircleFill } from "react-icons/bs"
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieRating from "./components/MovieRating";
import Image from "./components/Image";
import MovieCast from "./templates/MovieCast"
const StyledBookmark = styled(FaRegBookmark)`
  font-size: 24px;
  color:#BCBCCD;
`;

const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color:white;
`;

const StyledBsFillPlayCircleFill= styled(BsFillPlayCircleFill)`
  font-size: 45px;
  color: #FFFF;
`;
function DetailView() {
  return (
    <div className="App">
      <header className="ddd">
        <DetailImage width="375" height="300" />
        <div className="fff">
     <div className="jjj"><StyledBsArrowLeft/></div>
      <div>  <Switch /> </div>
        </div>
        <div className="center">  
        <div> <StyledBsFillPlayCircleFill/></div>
       <div> <p>Play Trailer</p> </div>
        </div>
      </header> 
      <main className="demo">
        <section>
          <div className="flexcontainer justify">
            <Heading title="Spiderman: No Way 
Home" size="20" as="h2" />
            <StyledBookmark />
          </div>
          <div>
            <MovieRating />
        
          </div>
          <div className="containerLabel">
<CategoryLabel title="HORROR"/>
<CategoryLabel title="MYSTERY"/>
<CategoryLabel title="THRILER"/>

</div>

<section className="gggg">
  <div className="flexdiv">
    <h4>Length</h4>
    <p>2h 28min</p>
  </div>
  <div className="flexdiv">
    <h4>Language</h4>
    <p>English</p>
  </div>
  <div className="flexdiv">
    <h4>Rating</h4>
    <p>PG-13</p>
  </div>
</section>
<section className="description">
<Heading title="Description" size="16" as="h2"  weight="900"/>
<p>
With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear, forcing Peter to discover what it truly means to be Spider-Man.
</p>
</section>

<MovieCast/>
          
        </section>

      <MovieCast/>

      </main>
    </div>
  );
}

export default DetailView;
