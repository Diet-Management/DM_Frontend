import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 10vh;

  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-left: 5vw;
  width: 50px;
`;

export const HeaderMenuContainer = styled.ul`
  margin-right: 5vw;
  padding: 0 5vw;

  width: 45vw;
  height: 6vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  list-style: none;
  overflow: hidden;
  background-color: white;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: 1px black solid;
  border-radius: 5px;

  a {
    cursor: pointer;
    font-family: "LeeSeoyun";
  }
`;
