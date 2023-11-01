import "./App.css";

import MovieDescription from "./templates/MovieDescription";
import styled from "styled-components";
import CategoryLabel from "./components/CategoryLabel";
import { BsArrowLeft } from "react-icons/bs";
import Heading from "./components/Heading";
import Switch from "./components/Switch";
import MovieRating from "./components/MovieRating";
import MovieCast from "./templates/MovieCast";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import axios from "axios";
import FooterComponent from "./components/FooterComponent";

import { FaArrowLeft } from "react-icons/fa";
import Favorite from "./components/Favorite";

const StyledFaArrowLeft = styled(FaArrowLeft)`
  color: #fff;
`;

const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: white;
`;

const StyledIframe = styled.iframe`
  width: 100vw;
  height: 300px;
  position: absolute;
  left: 0;
`;

const StyledHeader = styled.header`
  position: relative;
`;

function DetailView() {
  const navigate = useNavigate();
  const DetailData = useLoaderData();
  console.log("DetailsData: ", DetailData);
  // console.log(MovieDetail.cast);

  return (
    <div className="App">
      <StyledHeader>
        <StyledIframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${DetailData.details.videos.results[0].key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></StyledIframe>
        <div className="fff">
          <div className="jjj">
            <Link
              to="#"
              onClick={() => {
                navigate(-1);
                ("");
              }}
            >
              <StyledBsArrowLeft />
            </Link>
          </div>
          <div>
            <Switch />
          </div>
        </div>
      </StyledHeader>
      <main className="demo gridContainer dark:bg-black">
        <div>
          <div className="flexcontainer justify">
            <Heading
              title={DetailData.details.title}
              width="198"
              size="20"
              as="h2"
            />
            <Favorite movieId={DetailData.details.id} />
          </div>
          <div>
            <MovieRating voteAverage={DetailData.details.vote_average} />
          </div>
          <div className="containerLabel">
            {DetailData.details.genres.map((genre) => (
              <CategoryLabel key={genre.id} title={genre.name} />
            ))}
          </div>
          <section className="gggg">
            <div className="flexdiv">
              <h4>Length</h4>
              <p className="dark:text-white">{DetailData.details.runtime}</p>
            </div>
            <div className="flexdiv">
              <h4>Language</h4>
              <p className="dark:text-white">
                {DetailData.details.spoken_languages[0].name}
              </p>
            </div>
            <div className="flexdiv">
              <h4>Rating</h4>
              <p className="dark:text-white">{DetailData.details.vote_count}</p>
            </div>
          </section>
          <MovieDescription />
          <MovieCast data={DetailData.cast} />
        </div>
      </main>
      <footer className="gridContainer dark:bg-black">
        <nav>
          <FooterComponent />
        </nav>
      </footer>
    </div>
  );
}

export const DetailsViewData = async ({ params }) => {
  console.log("params:" + params.id);
  return Promise.allSettled([
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}?api_key=33b7f9cafa5f31863b6e09d72dbe99ef&append_to_response=videos`
    ),
    axios(
      `http://api.themoviedb.org/3/movie/${params.id}/credits?api_key=33b7f9cafa5f31863b6e09d72dbe99ef`
    ),


  ]).then((data) => {
    console.log("data: " + data);
    return {
      details: data[0].value.data,
      cast: data[1].value.data,
    };
  });
};

export default DetailView;
