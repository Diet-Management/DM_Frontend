import styled from "styled-components";
import apple from "../../Assets/ProfilePageApple.png";

export const ProfileLayout = styled.div`
    width: auto;
    height: 50vh;
    display: flex;
    justify-content: center;
    gap: 3vw;
`

export const Container = styled.div`
    width: 25vw;
    height: 100%;
    background-color: gray;
    overflow: hidden;
`
export const UserContainer = styled.ul`
    margin: 5%;
`

export const UserWrapper = styled.li`
    margin: 5%;
`

export const ProfilePicture = styled.img`
     object-fit: cover;
     width: 90%;
     height: 90%;
`