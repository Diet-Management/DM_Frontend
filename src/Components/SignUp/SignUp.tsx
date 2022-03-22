import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./Style";

export default function SignUp() {

    const [inputs, setInputs] = useState({
        email: "",
        name: "",
        PW: "",
    });
    const { email, name, PW} = inputs;

    const onChange = (e: any) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });

        console.log(email, PW);
    };

    const onSumbit = () => {
        axios.post('/v1/member/join', {
            email: "ang@gmail.com",
            name: "앙기모딱",
            password: "1234",
            theme: "LIGHT",
        })
            .then(({data}) => {
                console.log(data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <S.BackgroundContainer>
            <S.BackgroundWrapper>
                <S.UserWrapper><S.UserInput type="email" name="email" value={email} onChange={onChange} placeholder="이메일을 입력해주세요" /></S.UserWrapper>
                <S.UserWrapper><S.UserInput type="text" name="email" value={email} onChange={onChange} placeholder="이름을 입력해주세요" /></S.UserWrapper>
                <S.UserWrapper><S.UserInput type="password" name="PW" value={PW} onChange={onChange} placeholder="비밀번호를 입력해주세요" /></S.UserWrapper>

                <S.UserChoiceContainer>
                    <S.UserChoiceWrapper>Light<input type="radio" /></S.UserChoiceWrapper>
                    <S.UserChoiceWrapper>Dark<input type="radio" /></S.UserChoiceWrapper>
                </S.UserChoiceContainer>

                <S.UserSumbit onClick={onSumbit}>회원가입</S.UserSumbit>
            </S.BackgroundWrapper>
        </S.BackgroundContainer>
    );
}