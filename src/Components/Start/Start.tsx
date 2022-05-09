import react from "React";
import { Link } from "react-router-dom";
import * as S from "./Styled";

export default function Start() {
  return (
    <>
      <S.BackgroundContainer>
        <S.Start>
          <S.StartTItle>DM</S.StartTItle>
          <S.StartLoginWarp>
            <S.StartLogin>
              <Link to="/login">로그인</Link>
            </S.StartLogin>
            <S.StartSignUp>회원가입</S.StartSignUp>
          </S.StartLoginWarp>
        </S.Start>
      </S.BackgroundContainer>
    </>
  );
}
