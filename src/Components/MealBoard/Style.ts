import styled from "styled-components";

export const Layout = styled.div`
    width: 60vw;
    height: calc(70vh + 4px);
    display: flex;
    flex-direction: column;
    gap: 10%;
    border-radius: 10px;
`

export const TitleBox = styled.div`
    width: calc(100% - 2px);
    height: 25%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 4px 4px rgba(0,0,0,25%);
    gap: 2%;
    background: #fff;
`

export const MealBox = styled.div`
    width: calc(100% - 2px);
    height: 65%;
    border: 1px solid black;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0 10px 10px rgba(0,0,0,25%);
    background: #fff;
`

export const MealWrapper = styled.div`
    width: 20%;

    h2 {
        margin: 10% 0;
    }
    p {
        margin: 5% 0;
    }
`