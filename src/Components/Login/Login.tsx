import axios from "axios";
import { useState } from "react";
import * as S from "./Style";

interface abc {
  Email: string;
  PW: string;
}

export default function Login() {
  const [inputs, setInputs] = useState<abc>({
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
      .post(
        "/v1/member/join",
        {
          email: "s21067@gsm.hskr",
          password: "12345687",
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      )

      .then(({ data }) => {
        if (data.msg === "성공하였습니다") console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const ChangeLogin = () => [];

  return (
    <S.BackgroundContainer>
      <S.BackgroundWrapper>
        <S.UserWrapper>
          <S.UserInput
            type="email"
            name="Email"
            value={Email}
            onChange={onChange}
            placeholder="Id"
          />
        </S.UserWrapper>
        <S.UserWrapper>
          <S.UserInput
            type="password"
            name="PW"
            value={PW}
            onChange={onChange}
            placeholder="Password"
          />
        </S.UserWrapper>
        <S.UserSumbit onClick={onSumbit}>Login</S.UserSumbit>
        <S.GoIdPwFind>아이디 찾기/패스워드찾기</S.GoIdPwFind>
      </S.BackgroundWrapper>
    </S.BackgroundContainer>
  );
}
