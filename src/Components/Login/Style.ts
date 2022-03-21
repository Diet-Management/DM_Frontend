import styled from "styled-components";

export const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`

export const BackgroundWrapper = styled.div`
    width: 35vw;
    min-width: 300px;
    height: 70vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    border-radius: 50px;
    gap: 10px;
    `
    
    export const UserWrapper = styled.div`
    width: 100%;
    height: 100px;
    `
    
    export const UserInput = styled.input`
    background-color: rgba(255, 230, 80, 0.15);
    width: 99%;
    height: 100%;
    border: 0;
    padding: 0;
    padding-left: 1%;
    font-size: 20px;
`

export const UserSumbit = styled.button`
    width: 100px;
    height: 100px;
`