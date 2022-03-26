import styled from "styled-components";
import apple from "../../Assets/apple.png"

export const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    align-items: center;
    background-image: url(${apple});
    background-repeat : no-repeat;
    background-position: left bottom;
    background-size: 81.6vh;
`

export const BackgroundWrapper = styled.div`
    width: 35vw;
    min-width: 300px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    background-color: white;
    top: 10vh;
    right: 10vw;
    margin-left:auto;
    position: relative;
`

export const UserWrapper = styled.div`
    width: 100%;
    height: auto;
`

export const UserInput = styled.input`
    width: calc(100% - 2px);
    height: 100px;
    border: 1px solid black;
    border-radius: 10px;
    padding: 0;
    font-size: 20px;
    text-align: center;
`

export const UserChoiceContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 10px;

`

export const UserSumbit = styled.button`
    width: 100%;
    height: 10%;
    border: 1px solid black;
    border-radius: 10px;
    position: relative;
    background-color: #FFED48;
`