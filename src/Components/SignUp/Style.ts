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

export const BackgroundWrapper = styled.form`
    width: 35vw;
    min-width: 300px;
    height: 70vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    top: 10vh;
    right: 10vw;
    margin-left:auto;
    position: relative;
`

export const UserWrapper = styled.div`
    width: calc(100%);
    height: auto;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
`

export const PlaceHolder = styled.label`
    position: absolute;
    font-size: 20px;
    color: #adadad;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    transition: .5s;
`
export const UserInput = styled.input`
    width: calc(100% - 1px);
    height: 100px;
    border: none;
    border-bottom: 1px solid black;
    padding-top: 10%;
    font-size: 20px;
    text-align: center;

    &:focus ~ ${PlaceHolder},
    &:valid ~ ${PlaceHolder}{
        transform: translateY(-150%);
        color: #2691d9;
        font-size: 16px;
    }
`

export const UserChoiceContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    margin-top: 10px;
    overflow: hidden;
`

export const UserSumbit = styled.button`
    width: 30%;
    height: 10%;
    border: 0;
    border-radius: 100px;
    position: relative;
    background-color: #FFED48;
`