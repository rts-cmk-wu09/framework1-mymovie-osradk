import styled from "styled-components";

const StyledCategory = styled.span`
  background-color: #dbe3ff;
  color: #88a4e8;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center; /* Corrected this line */
  margin-left: 8px;
  font-size: 8px;
  width: 53px; /* Adjusted width */
  height: 10px; /* Adjusted height */
  padding: 4px 6px; /* Added padding */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const CategoryLabel = (props) => {
  return <StyledCategory>{props.title} </StyledCategory>;
};

export default CategoryLabel;
