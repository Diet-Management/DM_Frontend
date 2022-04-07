import styled from "styled-components";
import apple from "../../Assets/apple.png";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  background-image: url(${apple});
  background-repeat: no-repeat;
  background-position: top left;
  // background-position: top 190px left 325px;
  background-size: 90vh;
  z-index: -100;
`;

export const BackgroundWrapper = styled.div`
  width: 35vw;
  min-width: 300px;
  height: 70vh;
  // margin: 0 auto;
  padding-right: 10vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  gap: 20px;
  background-color: white;
`;

export const UserWrapper = styled.div`
  width: 100%;
  height: 5rem;
`;

export const UserInput = styled.input`
  font-family: "LeeSeoyun";
  border: 2px black solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  width: 38vw;
  height: 8vh;
  font-size: 1.7rem;
  text-align: center;
`;

export const UserSumbit = styled.button`
  font-family: "LeeSeoyun";
  border: 2px black solid;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  background-color: yellow;
  font-size: 2rem;
  width: 39vw;
  height: 9vh;
`;

export const GoIdPwFind = styled.p`
  font-family: "LeeSeoyun";
`;

export const StartWrap = styled.div`
  position: absolute;
  right: 35vw;
  top: 25vh;
  width: 60vw;
  height: 68vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  // background-color: blue;
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
