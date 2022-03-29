import axios from "axios";
import { useState } from "react";
import * as S from "./Style";

export default function Login() {
  const [inputs, setInputs] = useState({
    Email: "",
    PW: "",
  });
  const { Email, PW } = inputs;

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });

    console.log(Email, PW);
  };

  const onSumbit = () => {
    axios
      .post("http://10.53.68.195/v1/member/login", {
        email: "test@gmail.com",
        password: "1234",
      })
      .then(({ data }:any) => {
        if (data.msg === "성공하였습니다") console.log(data);
      })
      .catch((error:any) => {
        console.log(error);
      });
  };

  return (
    <S.BackgroundContainer>
      <S.BackgroundWrapper>
        <S.UserWrapper>
          <S.UserInput
            type="email"
            name="Email"
            value={Email}
            onChange={onChange}
            placeholder="이메일을 입력해주세요"
          />
        </S.UserWrapper>
        <S.UserWrapper>
          <S.UserInput
            type="password"
            name="PW"
            value={PW}
            onChange={onChange}
            placeholder="비밀번호를 입력해주세요"
          />
        </S.UserWrapper>
        <S.UserSumbit onClick={onSumbit}>로그인</S.UserSumbit>
        아이디 찾기
      </S.BackgroundWrapper>
    </S.BackgroundContainer>
  );
}
