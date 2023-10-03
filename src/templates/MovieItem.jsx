import Image from "../components/Image";
import Heading from "../components/Heading";
import MoviePopular from "../components/MoviePopular";
import styled from "styled-components";
import CategoryLabel from "../components/CategoryLabel";
import Time from "../components/Time";
import { useLoaderData, Link } from "react-router-dom";

const StyledArticleP = styled.article`
  display: flex;
  flex-direction: grow;
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

  return (
    <>
      {MovieData.popular.map((data) => (
        <Link to={`details/${data.id}`} key={data.id}>
        <StyledArticleP>
          <figure>
            <Image
              width="85"
              src={`https://image.tmdb.org/t/p/w200/${data.poster_path}`}
              alt="Cover Image"
            />
          </figure>
          <div>
            <Heading title={data.title} size="14" padding="15" as="h3" />
            <MoviePopular />

            <div className="containerLabel">
              <CategoryLabel title="HORROR" />
              <CategoryLabel title="MYSTERY" />
              <CategoryLabel title="THRILER" />
            </div>
            <Time />
          </div>
        </StyledArticleP> </Link>
      ))}
    </>
  );
};

// export async function loader() {
//   const res = await fetch(
//     "https://api.themoviedb.org/3/movie/popular/?api_key=a1f2e68a40958dfb3a6c547ab28ee83d"
//   );
//   const data = await res.json();
//   return data;
// }

export default MovieItem;
