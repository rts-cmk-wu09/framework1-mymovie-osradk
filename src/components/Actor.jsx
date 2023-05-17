import styled from "styled-components";
import Image from "../components/Image";

const StyledFigure = styled.figure`
  flex-basis: 20%;
  margin-bottom: 1rem;
  gap:10px;
`;
const StyledFigCaption = styled.figcaption`
  margin-top: 10px;
  font-size: 12px;
  word-wrap: break-word;
`;
const Actor = ({data}) => {
  return (
    <StyledFigure>
      <Image 
            src={`https://image.tmdb.org/t/p/w200/${data.profile_path}`}
        objectFit={true}
      width="72" height="72" />
      <StyledFigCaption>{data.name}</StyledFigCaption>
    </StyledFigure>
  );
};

export default Actor;
