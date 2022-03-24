import React from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";

export default function StartPage() {
    return(
        <S.BackgroundContainer>
            <S.LogoImg src={require("../../Assets/pig.png")}/>

            <h1>DM</h1>

            <S.UserContainer>
                <Link to="/signin"><S.UserWrapper>로그인</S.UserWrapper></Link>
                <Link to="/signup"><S.UserWrapper>회원가입</S.UserWrapper></Link>
            </S.UserContainer>
        </S.BackgroundContainer>
    );
}