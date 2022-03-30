import { url } from "inspector";
import styled from "styled-components";

type StyleProps = {
    pictureUrl?: string;
}

export const ProfileLayout = styled.div`
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    gap: 3vw;    
`

export const Container = styled.div<StyleProps>`
    width: 35vw;
    height: 60vh;
    background-color: white;
    overflow: hidden;
    display: flex;
    border: 1px solid black;
`

export const ProfilePicture = styled.img`
    object-fit: contain;
    width: 100%;
`

export const UserContainer = styled.ul`
    margin: 5%;
    width: 100%;
`

export const UserWrapper = styled.li`
    margin: 5%;
    font-family: "LeeSeoyun";
    font-size: 200%;
`