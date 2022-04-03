import axios from "axios";
import { profile } from "console";
import { useEffect, useState } from "react";
import * as S from "./Style";

type UserType = {
    memberIdx: number;
    name: string;
    profile: string;
    theme: string;
    postings: [];
};

export default function Profile() {

    const [profle, setProfile] = useState<UserType>();
    const [memberIdx, name, profile, theme, postings] = profile;

    useEffect(() => {
        axios.get('/v1/member/{memberIdx}')
            .then(({data}:any) => {
                setProfile(data);
            })
            .catch((error:any) => {
                throw new Error(error);
            })
    }, [])

    return (
        <>
            <S.ProfileLayout>
                <S.Container>
                    <S.ProfilePicture src={require("../../Assets/pig.png")} />
                </S.Container>
                <S.Container>
                    <S.UserContainer>
                        <S.UserWrapper>{}</S.UserWrapper>
                        <S.UserWrapper>몸무게 : 100kg</S.UserWrapper>
                        <S.UserWrapper>목표 몸무게 : 80kg</S.UserWrapper>
                        <S.UserWrapper>식단 : 단백질 위주</S.UserWrapper>
                    </S.UserContainer>
                </S.Container>
            </S.ProfileLayout>
        </>
    );
}