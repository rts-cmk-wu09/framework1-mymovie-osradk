import styled, { css } from "styled-components";

const StyledImg = styled.img`
  ${(props) =>
    (props.shadow &&
      css`
        box-shadow: 0px 5px 10px rgb(0 0 0 / 0.35);
      `) ||
    (props.objectFit &&
      css`
        object-fit: cover;
      `)}

  border-radius:5px;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

const Image = (props) => {
  return <StyledImg className={"w-" + props.width} {...props} />;
};
export default Image;
