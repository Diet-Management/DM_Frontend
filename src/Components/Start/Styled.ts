import styled from "styled-components";
import apple from "../../Assets/apple.png";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${apple});
  background-repeat: no-repeat;
  background-position: top 190px left 405px;
  background-size: 110vh;
  z-index: -100;
`;

export const Start = styled.div`
  position: absolute;
  right: 35vw;
  top: 25vh;
  width: 60vw;
  height: 68vh;
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const StartTItle = styled.p`
  font-family: "LeeSeoyun";
  font-size: 17rem;
  padding-bottom: 5rem;
`;

export const StartLoginWarp = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StartLogin = styled.div`
  font-family: "LeeSeoyun";
  width: 30vw;
  font-size: 4rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const StartSignUp = styled.div`
  font-family: "LeeSeoyun";
  width: 30vw;
  font-size: 2.5rem;
  text-decoration: underline;
  cursor: pointer;
`;
