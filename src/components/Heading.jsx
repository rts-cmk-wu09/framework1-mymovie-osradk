

import styled from "styled-components";

const StyledHeading = styled(props=> props.as)`
  font-size: ${props => props.size}px;
  padding-left:${props => props.paddingLeft}px;
  padding-top: ${props => props.padding}px;
  margin-left: ${props => props.margin}px;
  font-weight:${props => props.Weight};
  text-align:${props => props.textAlign};
width: ${props => props.width}px;
  grid-column-start: 2;
  align-self:${props => props.align};

`;

const Heading = (props) => {
  return <StyledHeading {...props}>{props.title}</StyledHeading>;
};

export default Heading;