import * as S from "./Style";

export default function Login() {
    return (
        <S.BackgroundContainer>
            <S.BackgroundWrapper>
                <S.UserWrapper><S.UserInput placeholder="아이디를 입력해주세요"/></S.UserWrapper>
                <S.UserWrapper><S.UserInput placeholder="비밀번호를 입력해주세요"/></S.UserWrapper>
                <S.UserSumbit></S.UserSumbit>
            </S.BackgroundWrapper>
        </S.BackgroundContainer>
    );
}