import * as S from "./Style";

export default function RecommendMeal(children:any) {
    return(
        <S.Layout>
            <S.TitleBox>
                <h1>오늘의 식단</h1>
            </S.TitleBox>
            <S.MealBox>
                <S.MealWrapper>아침</S.MealWrapper>
                <S.MealWrapper>점심</S.MealWrapper>
                <S.MealWrapper>저녁</S.MealWrapper>
            </S.MealBox>
        </S.Layout>
    );
}