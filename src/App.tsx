import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalStyle } from "./Style/GrobalStyle";
import NoticePage from "./Page/NoticePage";
import SignUp from "./Components/SignUp/SignUp";
import LoginPage from "./Page/";
import StartPage from "./Page/StartPage";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Startpage />} />
        <Route path="/notice" element={<NoticePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
