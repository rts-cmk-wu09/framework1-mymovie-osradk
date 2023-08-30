import styled from "styled-components";
import Heading from "../components/Heading";
import { useLoaderData } from "react-router-dom";

const StyledP = styled.p`
  line-height: 22px;
  font-size: 12px;
  color: #9c9c9c;
  margin-top: 8px;
  max-width: 375px;
  margin-bottom: 24px;
`;

const MovieDescription = () => {
  const movie = useLoaderData();
  return (
    <article>
      <Heading title="Description" size="16" as="h2" align="left" />
      <StyledP>{movie.details.overview}</StyledP>
    </article>
  );
};

export default MovieDescription;
