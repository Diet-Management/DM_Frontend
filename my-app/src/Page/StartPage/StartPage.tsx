import { Link } from "react-router-dom";
import * as S from "./Style";

export default function StartPage() {
    return(
        <S.BackgroundContainer>
            <S.LogoImg src={require("../../Assets/pig.png")}/>

            <h1>Diet Management</h1>

            <S.UserContainer>
                <Link to="/login"><S.UserWrapper>로그인</S.UserWrapper></Link>
                <Link to="/signup"><S.UserWrapper>회원가입</S.UserWrapper></Link>
            </S.UserContainer>
        </S.BackgroundContainer>
    );
}