import Header from "../../Components/Header/Header";
import RecommendMeal from "../../Components/MealBoard/MealBoard";
import { Background } from "./Style";

export default function RecommendMealPage() {
    return (
        <>
            <Header />
            <Background>
                <RecommendMeal />
            </Background>
        </>
    );
}