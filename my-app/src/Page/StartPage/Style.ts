import styled, { keyframes } from "styled-components";

export const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E9ECEF;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    background-color: #FFE650;
    margin: auto;
    position: relative;
    justify-content: center;
    border-radius: 50%;
    color: white;
`

export const LogoImg = styled.img`
    height: 100px;
    left: 0;
    right: 0;
    margin: 0 auto;
`

export const UserContainer = styled.div`
    padding-left: 0;
`

export const flicker = keyframes`
  10% {
    color: white;
  }
  50% {
    color: black;
  }
  85% {
    color: white;
  }
`
export const UserWrapper = styled.h2`
    display: inline-block;
    margin: 50px 40px;
    color: white;

    &:hover {
        animation: ${flicker} 2s infinite;
    }
`