import styled from "styled-components";
import apple2 from "../../Assets/noticeImg.png";

export const BackgroundContainer = styled.div`
  width: 100vw;
  height: 100vh;

  background-image: url(${apple2});
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: 150vh;
  z-index: -100;
`;

export const Backimg = styled.img`
  position: absolute;
  overflow: hidden;
  height: 150%;

  left: 25vw;
  top: -1rem;
`;

export const NoticeBoard = styled.div`
  display: flex;
  flex-direction: column;
  // background-color: white;

  & > p {
    font-family: "LeeSeoyun";
    font-size: 1.4rem;
    width: 17vw;
    height: 7vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px black solid;
  }
  width: 80%;
  height: 80vh;
  margin: 100px auto 0;
`;

export const Centent = styled.div`
  width: 80vw;
  height: 60vh;
  border: 3px black solid;
  div {
    padding: 0.8rem 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-bottom: 3px black solid;
    P {
      font-family: "LeeSeoyun";
      font-size: 1.1rem;
    }
  }
`;

export const AddNotice = styled.div`
  height: 7vh;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  button {
    font-family: "LeeSeoyun";
    height: 100%;
    width: 20vw;
    font-size: 1.4rem;
    background-color: white;
    display: flex;
    justify-content: center;
    border: 3px black solid;
    align-items: center;
  }
`;
