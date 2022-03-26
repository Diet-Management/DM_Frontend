import { GlobalStyle } from "./Style/GrobalStyle";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Page/HomePage/HomePage";
import NoticePage from "./Page/NoticePage";
<<<<<<< HEAD
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Page/LoginPage";
import Start from "./Components/Start/Start";
=======
import LoginPage from "./Page/Login/LoginPage";
import SignUpPage from "./Page/Signup/SignUpPage";

>>>>>>> 0e750a162a41c9a991a167131c557524945a0fee

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
