import styled from "styled-components";

export const HeaderWrapper = styled.div`
    top: 0;
    width: 100vw;
    height: 50px;
    border: 1px solid rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 10;
    
`

export const HeaderMenuContainer = styled.ul`
    position: absolute;
    top: 0;
    left: auto;
    bottom: 0px;
    right: 50px;
    margin-right: 0;
    display: flex;
    list-style: none;
    gap: 20px;
    overflow: hidden;
    
`

export const HeaderMenuWrapper = styled.li`
    margin-top: auto;
    margin-bottom: auto;
`

export const LogoImg = styled.img`
    margin-left: 50px;
    width: 50px;
`