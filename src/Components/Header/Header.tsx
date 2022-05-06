/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import { API } from "../../Utils/Libs/defaultApi";
import * as S from "./Style";
// import { Link } from "react-router-dom";

const Header = () => {

  const logout = () => {
    API.delete("/v1/member")
      .then(({ data }) => {
        console.log(data);
      })
      .catch(error => {
        throw new Error(error);
      })
  }

  return (
    <>
      <S.Header>
        <S.HeaderMenuContainer>
          <a>메뉴</a>
          <a>정보</a>
          <a onClick={() => logout}>로그아웃</a>
          <a>프로필</a>
        </S.HeaderMenuContainer>
      </S.Header>
    </>
  );
};

export default Header;
