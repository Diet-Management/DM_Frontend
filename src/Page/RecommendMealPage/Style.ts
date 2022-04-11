import styled from "styled-components";
import apple from "../../Assets/apple2.png"

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${apple});
    background-repeat: no-repeat;
    background-position: right bottom;
    background-size: 81.6vh;    
`