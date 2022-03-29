import styled from "styled-components";
import apple from "../../Assets/ProfilePageApple.png"

export const ProfileLayout = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${apple});
    background-repeat: no-repeat;
    background-position: left bottom;
    background-size: 80vh;
`