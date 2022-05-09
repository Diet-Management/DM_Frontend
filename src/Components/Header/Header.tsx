/* eslint-disable jsx-a11y/anchor-is-valid */
import * as S from "./Style";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <S.Header>
        <S.HeaderMenuContainer>
          <a>메뉴</a>
          <a>정보</a>
          <a>로그아웃</a>
          <a>프로필</a>
        </S.HeaderMenuContainer>
      </S.Header>
    </>
  );
};

export default Header;
