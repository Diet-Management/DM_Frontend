import { GlobalStyle } from "./Style/GrobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import NoticePage from "./Page/NoticePage";
import SignUpPage from "./Page/Signup/SignUpPage";
import StartPage from "./Page/StartPage/StartPage";
import ProfilePage from "./Page/ProfilePage/Profile";
import LoginPage from "./Page/Login/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
