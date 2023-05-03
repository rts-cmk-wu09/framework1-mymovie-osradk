import styled from "styled-components";
import coverimage from "../assets/video.png";

const StyledImg = styled.img`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const DetailImage = (props) => {
  return <StyledImg src={coverimage} alt="blablabla" width={props.width} />;
};
export default DetailImage;
