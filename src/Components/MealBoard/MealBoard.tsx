import * as S from "./Style";

export default function RecommendMeal(children:any) {
    return(
        <S.Layout>
            <S.TitleBox>
                <h1>오늘의 식단</h1>
            </S.TitleBox>
            <S.MealBox>
                <S.MealWrapper>
                    <h2>아침</h2>
                    <p>닭가슴살</p>
                    <p>계란</p>
                    <p>우유</p>
                    <p>요거트</p>
                </S.MealWrapper>
                <S.MealWrapper>
                    <h2>점심</h2>
                    <p>닭가슴살</p>
                    <p>계란</p>
                    <p>우유</p>
                    <p>요거트</p>
                </S.MealWrapper>
                <S.MealWrapper>
                    <h2>저녁</h2>
                    <p>닭가슴살</p>
                    <p>계란</p>
                    <p>우유</p>
                    <p>요거트</p>
                </S.MealWrapper>
            </S.MealBox>
        </S.Layout>
    );
}