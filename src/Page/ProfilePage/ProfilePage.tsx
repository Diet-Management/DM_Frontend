import Header from "../../Components/Header/Header";
import Profile from "../../Components/Profile/Profile";
import { ProfileLayout } from "./Style";

export default function ProfilePage() {
    return (
        <>
            <Header />
            <ProfileLayout>
                <Profile />
            </ProfileLayout>
        </>
    );
}