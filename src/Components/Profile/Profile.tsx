import { useEffect } from "react";
import * as S from "./Style";

export default function Profile() {

    useEffect(()=>{
        console.log(window.outerWidth);
        window.outerWidth = 100;
    })

    return(
        <>
            <S.ProfileLayout>
                <S.Container>
                    <S.ProfilePicture src={require("../../Assets/pig.png")} alt="프로필 사진"/>
                </S.Container>
                <S.Container>
                    <S.UserContainer>
                        <S.UserWrapper>이름 : 1일</S.UserWrapper>
                        <S.UserWrapper>몸무게 : 100kg</S.UserWrapper>
                        <S.UserWrapper>목표 몸무게 : 80kg</S.UserWrapper>
                        <S.UserWrapper>식단 : 단백질 위주</S.UserWrapper>
                    </S.UserContainer>
                </S.Container>
            </S.ProfileLayout>
        </>
    );
}