

import styled from "styled-components";

const StyledHeading = styled(props=> props.as)`
  font-size: ${props => props.size}px;
  padding-left:${props => props.paddingLeft}px;
  padding-top: ${props => props.padding}px;
  grid-column-start: 2;
text-align:center;
  align-self:center;
`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;