import axios from "axios";
import { useState } from "react";
import { API } from "../../Utils/Libs/defaultApi";
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
  };

  const onSumbit = () => {
    API.post("/v1/member/login",
      {
        email: Email,
        password: PW,
      }
    )

      .then(({ data }) => {
        if (data.msg === "성공하였습니다") {
          console.log(data.data.memberIdx);
          localStorage.setItem('client', data.data.memberIdx);
        }
      })
      .catch((error) => {
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
