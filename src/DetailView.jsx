import "./App.css";
import MovieDescription from "./templates/MovieDescription"
import DetailImage from "./assets/video.png";
import styled from "styled-components";
import CategoryLabel from "./components/CategoryLabel";
import { BsArrowLeft } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieRating from "./components/MovieRating";
import Image from "./components/Image";
import MovieCast from "./templates/MovieCast";
import { FaArrowLeft, FaPlay, FaRegBookmark } from "react-icons/fa";
const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;
const StyledHeader = styled.header`
  background-image: url(${DetailImage});
  background-size: cover;
  height: 300px;
  width: 375px;
`;

const StyledBookmark = styled(FaRegBookmark)`
  font-size: 24px;
  color: #bcbccd;
`;

const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: white;
`;

const StyledBsFillPlayCircleFill = styled(BsFillPlayCircleFill)`
  font-size: 45px;
  color: #ffff;
`;

function DetailView() {
  return (
    <div className="App">
      <StyledHeader>
        <div className="fff">
          <div className="jjj">
            <StyledBsArrowLeft />
          </div>
          <div>
            {" "}
            <Switch />{" "}
          </div>
        </div>
        <div className="center">
          <div>
            {" "}
            <StyledBsFillPlayCircleFill />
          </div>
          <div>
            {" "}
            <p>Play Trailer</p>{" "}
          </div>
        </div>
      </StyledHeader>
      <main className="demo">
       
          <div className="flexcontainer justify">
            <Heading
              title="Spiderman: No Way 
Home"
              width="198"
              size="20"
              as="h2"
            />
            <StyledBookmark />
          </div>
          <div>
            <MovieRating  padding="10"/>
          </div>
          <div className="containerLabel">
            <CategoryLabel title="HORROR" />
            <CategoryLabel title="MYSTERY" />
            <CategoryLabel title="THRILER" />
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
          <MovieDescription/>
             <MovieCast />
       

     
      </main>
    </div>
  );
}

export default DetailView;
