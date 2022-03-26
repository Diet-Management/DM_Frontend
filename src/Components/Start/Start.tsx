import react from "react";
import * as S from "./Styled";

export default function Start() {
  return (
    <>
      <S.Start>
        <S.StartTItle>DM</S.StartTItle>
        <S.StartLoginWarp>
          <S.StartLogin>로그인</S.StartLogin>
          <S.StartSignUp>회원가입</S.StartSignUp>
        </S.StartLoginWarp>
      </S.Start>
    </>
  );
}
