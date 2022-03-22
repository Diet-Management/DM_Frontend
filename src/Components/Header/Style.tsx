import styled from "styled-components";

export const Header = styled.div`
  width: 100vw;
  height: 10vh;
  position: fixed;
  z-index: 10;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImg = styled.img`
  margin-left: 5vw;
  width: 50px;
`;

export const HeaderMenuContainer = styled.ul`
  margin-right: 5vw;
  padding: 0 5vw;

  width: 40vw;
  height: 5vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 20px;

  list-style: none;
  overflow: hidden;
  background-color: #fffbde;

  a {
    cursor: pointer;
    font-family: "LeeSeoyun";
  }
`;
