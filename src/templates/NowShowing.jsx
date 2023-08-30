import Image from "../components/Image";
import Heading from "../components/Heading";
import MovieRating from "../components/MovieRating";
import styled from "styled-components";
import { Link, useLoaderData } from "react-router-dom";

const StyledArticle = styled.article`
  height: 283px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const NowShowing = (props) => {
//         const MovieCardData= useLoaderData();
//         console.log(MovieCardData);
//     return (

//   <StyledArticle>
//         <figure>
// <Image width="143" height="212"/>

// </figure>
// <Heading title={props.title} size="14"  as="h3"/>

// <MovieRating />

//         </StyledArticle>
//    );
// };

const NowShowing = () => {
  const MovieCardData = useLoaderData();
  // console.log(MovieCardData);
  return (
    <>
      {MovieCardData.nowShowing.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
          <StyledArticle>
            <figure>
              <Image
                width="143"
                shadow={true}
                src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
                alt="Cover Image"
              />
            </figure>
            <Heading
              title={
                data.title.length > 25
                  ? data.title.split(" ").slice(0, 3).join(" ") + "..."
                  : data.title
              }
              size="14"
              as="h3"
              paddingLeft="0"
              margin="0"
            />
            <MovieRating voteAverage={data.vote_average}/>
          </StyledArticle>
        </Link>
      ))}
    </>
  );
};
export async function loader() {
  const res = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing/?api_key=a1f2e68a40958dfb3a6c547ab28ee83d"
  );
  const data = await res.json();
  return data;
}

export default NowShowing;
