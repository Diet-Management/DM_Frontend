import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Style/GrobalStyle";
import NoticePage from "./Page/NoticePage";
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Page/LoginPage/LoginPage";
import ProfilePage from "./Page/ProfilePage/ProfilePage";
import StartPage from "./Page/StartPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
