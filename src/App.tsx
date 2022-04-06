import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Style/GrobalStyle";
import NoticePage from "./Page/NoticePage";
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Page/LoginPage/LoginPage";
import Start from "./Components/Start/Start";
import ProfilePage from "./Page/ProfilePage/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
