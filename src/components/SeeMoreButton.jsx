import styled from "styled-components";
const Button= styled.button`
width: 61px;
height: 21px;
border-radius:100px;
border:solid 1px;
font-size:8px;
padding:4px 8px;
background-color:white;
color:#aaa9b1;


`

const SeeMoreButton = (props) => {
    return ( 
        <Button {...props}>{props.title}</Button>
     );
}
 
export default SeeMoreButton;