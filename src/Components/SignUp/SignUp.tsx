import axios from "axios";
import { useState } from "react";
import * as S from "./Style";

interface information {
    email: string
    name: string
    PW: string
    theme: string
}

export default function SignUp() {

    const [inputs, setInputs] = useState<information>({
        email: "",
        name: "",
        PW: "",
        theme: "",
    });
    const { email, name, PW, theme } = inputs;

    const onChange = ({ target }: any) => {
        const { value, name } = target;
        setInputs({
            ...inputs,
            [name]: value
        });

    };

    const onSumbit = () => {
        const regExp_email = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

        // if (!regExp_email.test(email)) {
        //     alert("이메일 형식에 맞게 작성하세요");
        // } else if (name === "") {
        //     alert("이름을 작성하세요");
        // } else if (PW === "" || PW.length < 8) {
        //     alert("8자 이상의 비밀번호를 작성하세요");
        // } else if (theme === "") {
        //     alert("선호하는 테마를 선택하세요");
        // } else {
            axios.post('http://13.124.121.122:8081/v1/member/join', {
                email: email,
                name: name,
                password: PW,
                theme: theme,
            })
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                })
        // }

    }


    return (
        <S.BackgroundContainer>
            <S.BackgroundWrapper>
                <S.UserWrapper><S.UserInput type="email" name="email" value={email} onChange={onChange} placeholder="email" /></S.UserWrapper>
                <S.UserWrapper><S.UserInput type="text" name="name" value={name} onChange={onChange} placeholder="name" /></S.UserWrapper>
                <S.UserWrapper><S.UserInput type="password" name="PW" value={PW} onChange={onChange} placeholder="password" /></S.UserWrapper>

                <S.UserChoiceContainer>
                    <h5>Light</h5>
                    <h5>Dark</h5>
                    <input type="radio" name="radio" onClick={() => { setInputs({ ...inputs, theme: "LIGHT" }) }} />
                    <input type="radio" name="radio" onClick={() => { setInputs({ ...inputs, theme: "BLACK" }) }} />
                </S.UserChoiceContainer>

                <S.UserSumbit onClick={onSumbit}>회원가입</S.UserSumbit>
            </S.BackgroundWrapper>
        </S.BackgroundContainer>
    );
}