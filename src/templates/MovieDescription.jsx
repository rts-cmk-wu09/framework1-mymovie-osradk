
 

import styled from "styled-components";
import Heading from "../components/Heading";

const StyledP = styled.p`
  line-height:22px;
  font-size:12px;
  color: #9c9c9c;
  margin-top: 8px;
  max-width:375px;
  margin-bottom:24px;
`;

const MovieDescription = () => {
  return (
    <article>
      <Heading title="Description" size="16" as="h2" align="left"/>
      <StyledP>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus ad
        odio maiores consectetur ducimus. Animi, quis saepe. Quibusdam nulla,
        eligendi et atque ad dolore adipisci.
      </StyledP>
    </article>
  );
};

export default MovieDescription;