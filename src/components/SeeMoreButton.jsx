import styled from "styled-components";
const Button= styled.button`
width: 61px;
height: 21px;
border-radius:25px;
border:solid 1px;
font-size:10px;
lertter-spacing:2px;
background-color:white;
color:#aaa9b1;

`

const SeeMoreButton = () => {
    return ( 
        <Button>See More</Button>
     );
}
 
export default SeeMoreButton;