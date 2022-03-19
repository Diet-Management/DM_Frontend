import * as S from "./Style";
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <S.HeaderWrapper>
            <Link to="/"><S.LogoImg src={require("../../Assets/pig.png")} /></Link>

            <S.HeaderMenuContainer>
                <S.HeaderMenuWrapper>메뉴</S.HeaderMenuWrapper>
                <S.HeaderMenuWrapper>정보</S.HeaderMenuWrapper>
                <S.HeaderMenuWrapper>로그아웃</S.HeaderMenuWrapper>
                <S.HeaderMenuWrapper>프로필</S.HeaderMenuWrapper>
            </S.HeaderMenuContainer>

            

        </S.HeaderWrapper>

    );
}

export default Header;