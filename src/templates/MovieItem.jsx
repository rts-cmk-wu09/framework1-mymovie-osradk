import Image from "../components/Image";
import Heading from "../components/Heading";
import MoviePopular from "../components/MoviePopular";
import styled from "styled-components";
import CategoryLabel from "../components/CategoryLabel";
import Time from "../components/Time";
import { useLoaderData, Link } from "react-router-dom";

const StyledArticleP = styled.article`
  display: flex;
  flex-direction:row;
  gap: 20px;
`;

// const MovieItem = (props) => {
//   return (
//     <StyledArticleP>
//       <figure>
//         <Image width="85" height="120" />
//       </figure>
//       <div>
//         <Heading title={props.title} size="14" padding="15" as="h3" />
//         <MoviePopular />

//         <div className="containerLabel">
//           <CategoryLabel title="HORROR" />
//           <CategoryLabel title="MYSTERY" />
//           <CategoryLabel title="THRILER" />
//           <Time />
//         </div>
//       </div>
//     </StyledArticleP>
//   );
// };

const MovieItem = (props) => {
  const MovieData = useLoaderData();
  console.log("props: " + props.title);
  console.log("movieValue: " + MovieData.genre);

  return (
    <>
      {MovieData.popular.map((movie) => (
        <Link to={`details/${movie.id}`} key={movie.id}>
          <StyledArticleP>
            <figure>
              <Image
                width="85"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt="Cover Image"
              />
            </figure>
            <div style={{ width: '100%'}}>
              <Heading title={movie.title} size="14" padding="15" as="h3" />
              <MoviePopular />
              <div  className="containerLabel">
              {movie.genre_ids.map((genreId) => (
               
                  <CategoryLabel key={genreId}
                    title={getGenreNameById(genreId, MovieData.genre)}
                  />
               
              ))}
              </div>
              <Time />
            </div>
          </StyledArticleP>{" "}
        </Link>
      ))}
    </>
  );
};

function getGenreNameById(genreId, genres) {
  const genre = genres.find((genre) => genre.id === genreId);
  return genre ? genre.name : "Ukendt genre";
}


export default MovieItem;
