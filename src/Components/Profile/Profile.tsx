import axios from "axios";
import { useEffect, useState } from "react";
import * as S from "./Style";

type profiletype = {
    memberIdx: number;
    name: string;
    profile: string;
    theme: string;
    postings: [];
}

export default function Profile() {

    const [profile, setProfile] = useState<profiletype>();

    useEffect(() => {
        axios.get('/v1/posting')
            .then(({ data }: any) => {
                setProfile(data);
                console.log(data);
            })
            .catch((error: any) => {
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
                        <S.UserWrapper>이름 : {profile?.name}</S.UserWrapper>
                        <S.UserWrapper>몸무게 : 100kg</S.UserWrapper>
                        <S.UserWrapper>목표 몸무게 : 80kg</S.UserWrapper>
                        <S.UserWrapper>식단 : 단백질 위주</S.UserWrapper>
                    </S.UserContainer>
                </S.Container>
            </S.ProfileLayout>
        </>
    );
}