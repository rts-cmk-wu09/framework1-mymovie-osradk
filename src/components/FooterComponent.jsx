import styled from "styled-components";
import { FaRegBookmark } from "react-icons/fa";
import { FcFilmReel } from "react-icons/fc";
import { BsTicket } from "react-icons/bs";

const StyledBookmark = styled(FaRegBookmark)`
  font-size: 24px;
  color:#BCBCCD;
`;
const StyledFilm = styled(FcFilmReel)`
  font-size: 24px;
  color:#BCBCCD;
`;
const StyledFTicket = styled(BsTicket)`
  font-size: 24px;
  transform: rotate(90deg);
  color:#BCBCCD;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding:20px 53px;
`;

const FooterComponent = () => {
  return (
    <StyledDiv>
      <StyledFilm />
      <StyledFTicket />
       <StyledBookmark />
       </StyledDiv>
  );
};

export default FooterComponent;
