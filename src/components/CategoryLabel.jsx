import styled from "styled-components";

const StyledCategory = styled.span`
  background-color: #dbe3ff;
  color: #88a4e8;
  border-radius: 100px;
  padding: 4px 12px;
  margin-left: 8px;
  font-size: 8px;
`;
const CategoryLabel = (props) => {
  return <StyledCategory>{props.title} </StyledCategory>;
};

export default CategoryLabel;
