import styled from "styled-components";

export const Layout = styled.div`
    width: 60vw;
    height: 70vh;
    background: #fff;
    display: flex;
    flex-direction: column;
    gap: 10%;
`

export const TitleBox = styled.div`
    width: calc(100% - 2px);
    height: 25%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MealBox = styled.div`
    width: calc(100% - 2px);
    height: 65%;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const MealWrapper = styled.div`
    width: 20%;
`